import { InputAdornment, Stack, TextField, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import { ClearButton } from 'src/components/clear-button';
import Iconify from 'src/components/iconify';
// import { TableListParams } from 'src/types/users';

// ----------------------------------------------------------------------

type Props = {
  filters: {
    status?: 'All' | 'Active' | 'Inactive';
    search?: string;
    // include other filter properties as needed
    [key: string]: any;
  };
  onFilters: (name: string, value: string) => void;
  hasSearch?: boolean;
  searchFields?: string[];
};

export default function TableToolbar({
  filters,
  onFilters,
  hasSearch = true,
  searchFields = [],
}: Props) {
  const [searchValue, setSearchValue] = useState(filters.search || '');
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFilterSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchValue(value);

      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(() => {
        onFilters('search', value);
      }, 700);
    },
    [onFilters]
  );

  const handleStatusChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      onFilters('status', event.target.value);
    },
    [onFilters]
  );

  const handleResetFilters = useCallback(() => {
    setSearchValue('');
    onFilters('search', '');
    onFilters('status', 'All');
  }, [onFilters]);

  // const hasActiveFilters = searchValue || (filters.status && filters.status !== 'All');

  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-end', md: 'center' }}
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{
        py: 2.5,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
        {hasSearch && (
          <TextField
            fullWidth
            value={searchValue}
            onChange={handleFilterSearch}
            placeholder={
              searchFields.length > 0
                ? `Search by ${searchFields.join(', ').toLowerCase()}`
                : 'Search...'
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        )}

        {/* Status Filter */}
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filters.status || 'All'}
            onChange={handleStatusChange}
            label="Status"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>

        {/* {hasActiveFilters && ( */}
          <ClearButton onClick={handleResetFilters} />
        {/* )} */}
      </Stack>
    </Stack>
  );
}
