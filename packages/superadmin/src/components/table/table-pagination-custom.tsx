import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton, MenuItem, Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { ChangeEvent } from 'react';
import { DEFAULT_PAGE_SIZE_OPTIONS } from 'src/config-global';

// ----------------------------------------------------------------------

type Props = {
  dense?: boolean;
  onChangeDense?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowsPerPageOptions?: number[];
  hideRowsPerPage?: boolean;
};

export default function TablePaginationCustom({
  dense,
  onChangeDense,
  rowsPerPageOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  sx,
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  hideRowsPerPage = false,
}: Props) {
  // Simple pagination calculation
  const totalPages = Math.ceil(count / rowsPerPage);

  // For page 1: start = 1, end = min(rowsPerPage, count)
  // For page 2: start = rowsPerPage + 1, end = min(2 * rowsPerPage, count)
  const startItem = count === 0 ? 0 : (page - 1) * rowsPerPage + 1;
  const endItem = Math.min(page * rowsPerPage, count);

  const handlePreviousPage = () => {
    if (page > 1) {
      onPageChange(null, page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      onPageChange(null, page + 1);
    }
  };

  const handleRowsPerPageChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const syntheticEvent = {
      ...event,
      target: {
        ...(event.target as HTMLInputElement),
        value: event.target.value.toString(),
      },
    } as ChangeEvent<HTMLInputElement>;
    onRowsPerPageChange(syntheticEvent);
  };

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
        sx={{
          px: 2,
          py: 1,
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        }}
        gap={{ xs: 1.5, md: 2 }}
      >
        {/* Rows per page selector */}
        {!hideRowsPerPage && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              width: { xs: '100%', md: 'auto' },
              justifyContent: 'flex-end',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Rows per page:
            </Typography>
            <TextField
              select
              size="small"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              sx={{
                minWidth: 80,
                '& .MuiSelect-select': {
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
              SelectProps={{
                displayEmpty: true,
                sx: { height: 32 },
              }}
            >
              {rowsPerPageOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        )}

        {/* Pagination info and navigation */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            width: { xs: '100%', md: 'auto' },
            justifyContent: 'flex-end',
          }}
        >
          {/* Pagination info */}
          <Typography variant="body2" color="text.secondary">
            {count === 0 ? '0-0 of 0' : `${startItem}-${endItem} of ${count}`}
          </Typography>

          {/* Navigation buttons */}
          <Stack direction="row" spacing={0.5}>
            <IconButton
              onClick={handlePreviousPage}
              disabled={page <= 1}
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
                '&.Mui-disabled': {
                  color: 'text.disabled',
                },
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={handleNextPage}
              disabled={page >= totalPages}
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
                '&.Mui-disabled': {
                  color: 'text.disabled',
                },
              }}
            >
              <ChevronRight />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
