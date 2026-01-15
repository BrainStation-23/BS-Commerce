import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

export interface TableColumn {
  field: string;
  headerName: string;
  width?: number;
  minWidth?: number;
  align?: 'left' | 'right' | 'center';
  valueFormatter?: (value: any, row?: any) => string | React.ReactNode;
  renderCell?: (value: any, row: any) => React.ReactNode;
}

export interface AutoScrollTableProps<T> {
  rows: T[];
  columns: TableColumn[];
  height?: number | string;
  getRowId?: (row: T, index: number) => string | number;
  enableBatchRendering?: boolean;
  initialBatchSize?: number;
  batchSize?: number;
  loadMoreThreshold?: number;
  rowHeight?: number;
}

export function AutoScrollTable<T extends object>({
  rows,
  columns,
  height = 600,
  getRowId,
  enableBatchRendering = false,
  initialBatchSize = 100,
  batchSize = 100,
  loadMoreThreshold = 0.9,
  rowHeight = 48,
}: AutoScrollTableProps<T>) {
  const [visibleCount, setVisibleCount] = useState(() =>
    enableBatchRendering ? Math.min(initialBatchSize, rows.length) : rows.length
  );
  const [isBatchLoading, setIsBatchLoading] = useState(false);
  const [scrollState, setScrollState] = useState({ top: 0, viewport: 0 });
  const loadIndicatorTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overscan = 1;

  const estimatedHeight = typeof height === 'number' ? height : 600;

  useEffect(() => {
    if (enableBatchRendering) {
      setVisibleCount(Math.min(initialBatchSize, rows.length));
      setIsBatchLoading(false);
    }
  }, [rows.length, enableBatchRendering, initialBatchSize]);

  useEffect(() => {
    setScrollState((prev) => ({ ...prev, viewport: estimatedHeight }));
  }, [estimatedHeight]);

  useEffect(
    () => () => {
      if (loadIndicatorTimer.current) {
        clearTimeout(loadIndicatorTimer.current);
      }
    },
    []
  );

  const visibleRows = enableBatchRendering ? rows.slice(0, visibleCount) : rows;
  const totalRenderableRows = visibleRows.length;
  const virtualRange = useMemo(() => {
    const viewportRowCount = Math.ceil((scrollState.viewport || estimatedHeight) / rowHeight) + overscan * 2;
    const start = Math.max(0, Math.floor(scrollState.top / rowHeight) - overscan);
    const end = Math.min(totalRenderableRows, start + viewportRowCount);
    return { start, end };
  }, [scrollState, rowHeight, totalRenderableRows, overscan, estimatedHeight]);
  const topSpacerHeight = virtualRange.start * rowHeight;
  const bottomSpacerHeight = Math.max(totalRenderableRows - virtualRange.end, 0) * rowHeight;
  const virtualizedRows = visibleRows.slice(virtualRange.start, virtualRange.end);

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
      setScrollState({ top: scrollTop, viewport: clientHeight });

      if (enableBatchRendering && scrollHeight > clientHeight && visibleCount < rows.length) {
        const scrolledRatio = (scrollTop + clientHeight) / scrollHeight;
        if (scrolledRatio >= loadMoreThreshold) {
          setIsBatchLoading(true);
          setVisibleCount((prev) => Math.min(prev + batchSize, rows.length));
          if (loadIndicatorTimer.current) {
            clearTimeout(loadIndicatorTimer.current);
          }
          loadIndicatorTimer.current = setTimeout(() => setIsBatchLoading(false), 300);
        }
      }
    },
    [enableBatchRendering, visibleCount, rows.length, loadMoreThreshold, batchSize]
  );

  const tableMinWidth = useMemo(
    () => Math.max(columns.reduce((sum, col) => sum + (col.width || col.minWidth || 150), 0), 960),
    [columns]
  );
  const headLabel = useMemo(
    () =>
      columns.map((column) => ({
        id: column.field,
        label: column.headerName,
        align: column.align,
        width: column.width,
        minWidth: column.minWidth,
      })),
    [columns]
  );

  return (
    <Box sx={{ width: '100%', height, display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          flex: 1,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          backgroundColor: 'background.paper',
          overflow: 'hidden',
        }}
      >
        <TableContainer sx={{ flex: 1, height: '100%', position: 'relative', overflow: 'hidden' }}>
          <Scrollbar
            scrollableNodeProps={{ onScroll: handleScroll }}
            sx={{ height: '100%', '& .simplebar-content-wrapper': { outline: 'none' } }}
          >
            <Table stickyHeader sx={{ minWidth: tableMinWidth }}>
              <TableHeadCustom
                headLabel={headLabel}
                sx={{ '& .MuiTableCell-root': { backgroundColor: 'background.neutral' } }}
              />
              <TableBody>
                {topSpacerHeight > 0 && (
                  <TableRow sx={{ height: topSpacerHeight, '& .MuiTableCell-root': { border: 'none', p: 0 } }}>
                    <TableCell colSpan={columns.length} />
                  </TableRow>
                )}
                {virtualizedRows.map((row, index) => {
                  const actualIndex = virtualRange.start + index;
                  const rowId = getRowId ? getRowId(row, actualIndex) : (row as any).id ?? actualIndex;
                  return (
                    <TableRow key={rowId} hover sx={{ height: rowHeight }}>
                      {columns.map((column) => {
                        const value = (row as any)[column.field];
                        let rendered: React.ReactNode;
                        if (column.renderCell) {
                          rendered = column.renderCell(value, row);
                        } else if (column.valueFormatter) {
                          rendered = column.valueFormatter(value, row);
                        } else {
                          rendered = value ?? '--';
                        }
                        return (
                          <TableCell
                            key={column.field}
                            align={column.align || 'left'}
                            sx={{
                              width: column.width,
                              minWidth: column.minWidth || column.width,
                              py: 1.25,
                              px: 2,
                              typography: 'body2',
                              color: 'text.primary',
                            }}
                          >
                            {rendered}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                {bottomSpacerHeight > 0 && (
                  <TableRow sx={{ height: bottomSpacerHeight, '& .MuiTableCell-root': { border: 'none', p: 0 } }}>
                    <TableCell colSpan={columns.length} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>
      </Box>
      {enableBatchRendering && visibleCount < rows.length && (
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              px: 2.5,
              py: 1,
              borderRadius: 999,
              backgroundColor: 'background.paper',
              // boxShadow: (theme) => theme.customShadows?.z8 ?? '0px 6px 12px rgba(0,0,0,0.12)',
              // border: '1px solid',
              // borderColor: 'divider',
              minWidth: 220,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              fontWeight={isBatchLoading ? 600 : 400}
            >
              {isBatchLoading ? 'Loading more records' : 'Scroll to load more'}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default AutoScrollTable;
