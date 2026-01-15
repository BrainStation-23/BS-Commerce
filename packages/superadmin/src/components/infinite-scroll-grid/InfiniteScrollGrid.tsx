import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";

export interface InfiniteScrollGridProps<T> {
  rows: T[];
  columns: GridColDef[];
  height?: number | string;
  getRowId?: (row: T, index: number) => string | number;
  initialPageSize?: number;
  density?: "comfortable" | "standard" | "compact";
}

export function InfiniteScrollGrid<T>({
  rows,
  columns,
  height = "auto",
  getRowId,
  initialPageSize = 100,
  density = "compact",
}: InfiniteScrollGridProps<T>) {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: initialPageSize,
  });

  useEffect(() => {
    setPaginationModel((prev) => ({
      ...prev,
      page: 0,
    }));
  }, [rows]);

  const autoHeight = height === "auto";
  const rowsWithId = useMemo(
    () =>
      rows.map((row, index) => ({
        ...(row as object),
        id: getRowId ? getRowId(row, index) : (row as any).id ?? index,
      })),
    [rows, getRowId]
  );

  return (
    <Box
      sx={{
        width: "100%",
        ...(autoHeight ? {} : { height }),
      }}
    >
      <DataGrid
        rows={rowsWithId as any[]}
        columns={columns}
        density={density}
        autoHeight={autoHeight}
        disableRowSelectionOnClick
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[initialPageSize]}
        hideFooterSelectedRowCount
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "background.paper",
            borderBottom: "1px solid",
            borderColor: "divider",
          },
        }}
      />
    </Box>
  );
}

export default InfiniteScrollGrid;

