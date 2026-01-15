import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
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
};

// Helper function to generate page numbers with ellipsis
const generatePageNumbers = (currentPage: number, totalPages: number, maxVisible: number = 7) => {
  const pages: (number | string)[] = [];

  if (totalPages <= maxVisible) {
    // Show all pages if total is small
    for (let i = 1; i <= totalPages; i += 1) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);

    if (currentPage <= 3) {
      // Show first few pages
      for (let i = 2; i <= Math.min(4, totalPages - 2); i += 1) {
        pages.push(i);
      }
      if (totalPages > 5) {
        pages.push('...');
      }
    } else if (currentPage >= totalPages - 2) {
      // Show last few pages
      if (totalPages > 5) {
        pages.push('...');
      }
      for (let i = Math.max(2, totalPages - 3); i < totalPages; i += 1) {
        pages.push(i);
      }
    } else {
      // Show pages around current page
      pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
        pages.push(i);
      }
      pages.push('...');
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
  }

  return pages;
};

export default function TablePaginationStep({
  dense,
  onChangeDense,
  rowsPerPageOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  sx,
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== page) {
      onPageChange(null, pageNumber);
    }
  };

  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    const syntheticEvent = {
      ...event,
      target: {
        ...event.target,
        value: event.target.value.toString(),
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onRowsPerPageChange(syntheticEvent);
  };

  const pageNumbers = generatePageNumbers(page, totalPages, isMobile ? 5 : 7);

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          px: { xs: 1, sm: 2 },
          py: 1,
          borderTop: (themeDetails) => `1px solid ${themeDetails.palette.divider}`,
        }}
        gap={{ xs: 1, sm: 2 }}
      >
        {/* Rows per page selector - hidden on mobile */}
        {!isMobile && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              Rows per page:
            </Typography>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                displayEmpty
                sx={{ height: 32 }}
              >
                {rowsPerPageOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        )}

        {/* Pagination info and navigation */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
          sx={{ flexGrow: 1, justifyContent: { xs: 'center', sm: 'flex-end' } }}
        >
          {/* Pagination info - simplified on mobile */}
          {!isMobile && (
            <Typography variant="body2" color="text.secondary">
              {count === 0 ? '0-0 of 0' : `${startItem}-${endItem} of ${count}`}
            </Typography>
          )}

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

            {/* Page numbers */}
            {!isMobile && (
              <Stack direction="row" spacing={0.5}>
                {pageNumbers.map((pageNumber, index) => (
                  <Box key={index}>
                    {pageNumber === '...' ? (
                      <Typography
                        variant="body2"
                        sx={{
                          px: 1,
                          py: 0.5,
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: 32,
                          height: 32,
                        }}
                      >
                        ...
                      </Typography>
                    ) : (
                      <Button
                        variant={pageNumber === page ? 'contained' : 'text'}
                        size="small"
                        onClick={() => handlePageClick(pageNumber as number)}
                        sx={{
                          minWidth: 32,
                          height: 32,
                          px: 1,
                          py: 0.5,
                          fontSize: '0.875rem',
                          fontWeight: pageNumber === page ? 600 : 400,
                          color: pageNumber === page ? 'primary.contrastText' : 'text.primary',
                          backgroundColor: pageNumber === page ? 'primary.main' : 'transparent',
                          '&:hover': {
                            backgroundColor: pageNumber === page ? 'primary.dark' : 'action.hover',
                          },
                          '&:disabled': {
                            color: 'text.disabled',
                          },
                        }}
                      >
                        {pageNumber}
                      </Button>
                    )}
                  </Box>
                ))}
              </Stack>
            )}

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

          {/* Mobile page info */}
          {isMobile && (
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {page} / {totalPages}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
