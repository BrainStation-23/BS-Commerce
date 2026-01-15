import { InputAdornment, Stack, TextField } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import { ClearButton } from 'src/components/clear-button';
import Iconify from 'src/components/iconify';
// import { TableListParams } from 'src/types/users';

// ----------------------------------------------------------------------

type Props = {
  filters: {
    search?: string;
    // include other filter properties as needed
    [key: string]: any;
  };
  onFilters: (name: string, value: string) => void;
  hasSearch?: boolean;
  searchFields?: string[];
};

export default function ProductsTableToolbar({
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

  const handleResetFilters = useCallback(() => {
    setSearchValue('');
    onFilters('search', '');
  }, [onFilters]);

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
            value={searchValue}
            onChange={handleFilterSearch}
            placeholder={
              searchFields.length > 0
                ? `Search by ${searchFields.join(', ').toLowerCase()}`
                : 'Search...'
            }
            sx={{ width: '50%' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        )}

        {hasSearch && !!searchValue && <ClearButton onClick={handleResetFilters} />}
      </Stack>
    </Stack>
  );
}
