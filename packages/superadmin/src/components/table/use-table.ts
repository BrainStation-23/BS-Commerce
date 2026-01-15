import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  DEFAULT_PAGE,
  DEFAULT_ROWS_PER_PAGE,
  DEFAULT_SORT_BY,
  SORT_ORDER,
} from 'src/config-global';
import { TableProps } from './types';

// ----------------------------------------------------------------------

type ReturnType = TableProps;

export type UseTableProps = {
  defaultDense?: boolean;
  defaultOrder?: SORT_ORDER;
  defaultOrderBy?: string;
  defaultSelected?: string[];
  defaultRowsPerPage?: number;
  defaultCurrentPage?: number;
  onSortChange?: (orderBy: string, order: SORT_ORDER) => void;
};

export default function useTable(props?: UseTableProps): ReturnType {
  const [searchParams] = useSearchParams();

  const [dense, setDense] = useState(!!props?.defaultDense);

  // Initialize page with 1-based indexing from URL
  const [page, setPage] = useState(() => {
    const urlPage = searchParams.get('page');
    const parsedPage = urlPage ? parseInt(urlPage, 10) : NaN;
    return Number.isNaN(parsedPage) ? props?.defaultCurrentPage || DEFAULT_PAGE : parsedPage;
  });

  // Initialize rowsPerPage from URL
  const [rowsPerPage, setRowsPerPage] = useState(() => {
    const urlLimit = searchParams.get('limit');
    const parsedLimit = urlLimit ? parseInt(urlLimit, 10) : NaN;
    return Number.isNaN(parsedLimit)
      ? props?.defaultRowsPerPage || DEFAULT_ROWS_PER_PAGE
      : parsedLimit;
  });

  const [orderBy, setOrderBy] = useState(props?.defaultOrderBy || DEFAULT_SORT_BY);
  const [order, setOrder] = useState<SORT_ORDER>(props?.defaultOrder || SORT_ORDER.DESC);
  const [selected, setSelected] = useState<string[]>(props?.defaultSelected || []);

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === SORT_ORDER.ASC;
      if (id !== '') {
        const newOrder = isAsc ? SORT_ORDER.DESC : SORT_ORDER.ASC;
        setOrder(newOrder);
        setOrderBy(id);
        // Call the external handler if provided
        if (props?.onSortChange) {
          props.onSortChange(id, newOrder);
        }
      }
    },
    [order, orderBy, props]
  );

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setPage(1); // Reset to first page when changing rows per page
    setRowsPerPage(newRowsPerPage);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeDense = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  }, []);

  const onSelectAllRows = useCallback((checked: boolean, inputValue: string[]) => {
    if (checked) {
      setSelected(inputValue);
      return;
    }
    setSelected([]);
  }, []);

  const onResetPage = useCallback(() => {
    setPage(1);
  }, []);

  const onUpdatePageDeleteRow = useCallback(
    (totalRowsInPage: number) => {
      setSelected([]);
      if (page > 1) {
        if (totalRowsInPage < 2) {
          setPage(page - 1);
        }
      }
    },
    [page]
  );

  const onUpdatePageDeleteRows = useCallback(
    ({
      totalRowsInPage,
      totalRowsFiltered,
    }: {
      totalRowsInPage: number;
      totalRowsFiltered: number;
    }) => {
      const totalSelected = selected.length;

      setSelected([]);

      if (page > 1) {
        if (totalSelected === totalRowsInPage) {
          setPage(page - 1);
        } else if (totalSelected === totalRowsFiltered) {
          setPage(1);
        } else if (totalSelected > totalRowsInPage) {
          const newPage = Math.ceil((totalRowsFiltered - totalSelected) / rowsPerPage);
          setPage(newPage);
        }
      }
    },
    [page, selected.length, rowsPerPage]
  );

  return {
    dense,
    order,
    page,
    orderBy,
    rowsPerPage,
    //
    selected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangePage,
    onChangeDense,
    onResetPage,
    onChangeRowsPerPage,
    onUpdatePageDeleteRow,
    onUpdatePageDeleteRows,
    //
    setPage,
    setDense,
    setOrder,
    setOrderBy,
    setSelected,
    setRowsPerPage,
  };
}
