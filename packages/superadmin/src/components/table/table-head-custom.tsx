import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { SORT_ORDER } from 'src/config-global';

// ----------------------------------------------------------------------

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
} as const;

// ----------------------------------------------------------------------

type TableHeadLabel = {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center';
  width?: number;
  minWidth?: number;
  sortable?: boolean;
  apiSortField?: string;
  flex?: number;
};

type Props = {
  order?: SORT_ORDER;
  orderBy?: string;
  headLabel: TableHeadLabel[];
  rowCount?: number;
  numSelected?: number;
  onSort?: (id: string) => void;
  onSelectAllRows?: (checked: boolean) => void;
  sx?: SxProps<Theme>;
  disableSelectAllRows?: boolean;
};

export default function TableHeadCustom({
  order,
  orderBy,
  rowCount = 0,
  headLabel,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx,
  disableSelectAllRows = false,
}: Props) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    <TableHead sx={{ ...sx }}>
      {/* <TableRow sx={{ background: theme.palette.primary.lighter }}> */}
      <TableRow sx={{ background: theme.palette.background.neutral }}>
        {onSelectAllRows && (
          <TableCell
            padding="checkbox"
            sx={{
              background: 'transparent',
              borderBottom: 'none',
            }}
          >
            <Checkbox
              indeterminate={!!numSelected && numSelected < rowCount}
              checked={!!rowCount && numSelected === rowCount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onSelectAllRows(event.target.checked)
              }
              disabled={disableSelectAllRows}
            />
          </TableCell>
        )}{' '}
        {headLabel.map((headCell) => {
          let sortDirection: 'asc' | 'desc' | false = false;
          if (orderBy === headCell.id) {
            sortDirection = order === SORT_ORDER.ASC ? 'asc' : 'desc';
          }
          return (
            <TableCell
              key={headCell.id}
              align={headCell.align || 'left'}
              sortDirection={sortDirection}
              sx={{
                width: headCell.width,
                minWidth: headCell.minWidth,
                background: 'transparent',
                borderBottom: 'none',
              }}
            >
              {onSort && headCell.sortable ? (
                <TableSortLabel
                  hideSortIcon
                  active={orderBy === headCell.id}
                  direction={(() => {
                    if (orderBy === headCell.id) {
                      return order === SORT_ORDER.ASC ? 'asc' : 'desc';
                    }
                    return 'asc';
                  })()}
                  onClick={() => onSort(headCell.id)}
                  sx={{
                    fontWeight: 'bold',
                    color: orderBy === headCell.id ? PRIMARY_MAIN : undefined,
                    '&.Mui-active': {
                      color: PRIMARY_MAIN,
                    },
                  }}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box sx={{ ...visuallyHidden }}>
                      {order === SORT_ORDER.DESC ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              ) : (
                headCell.label
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}
