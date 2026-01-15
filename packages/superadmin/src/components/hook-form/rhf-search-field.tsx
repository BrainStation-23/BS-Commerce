import { CircularProgress, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Iconify from 'src/components/iconify';

interface SearchOption {
  id: string;
  label: string;
  [key: string]: any;
}

interface RHFSearchFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
  isRequired?: boolean;
  disabled?: boolean;
  loading?: boolean;
  options: SearchOption[];
  getOptionLabel?: (option: SearchOption) => string;
  renderOption?: (option: SearchOption) => React.ReactNode;
  onSearch?: (query: string) => void;
  debounceMs?: number;
  showDropdown?: boolean;
  onShowDropdownChange?: (show: boolean) => void;
  noResultsText?: string;
}

export default function RHFSearchField({
  name,
  label,
  placeholder,
  helperText,
  isRequired = false,
  disabled = false,
  loading = false,
  options,
  getOptionLabel = (option) => option.label,
  renderOption,
  onSearch,
  debounceMs = 500,
  showDropdown: externalShowDropdown,
  onShowDropdownChange,
  noResultsText = 'No results found',
}: RHFSearchFieldProps) {
  const { control, setValue, watch } = useFormContext();

  const selectedId = watch(name);
  const selectedOption = options.find((option) => option.id === selectedId);
  const [searchQuery, setSearchQuery] = useState('');
  const [internalShowDropdown, setInternalShowDropdown] = useState(false);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showDropdown =
    externalShowDropdown !== undefined ? externalShowDropdown : internalShowDropdown;
  const setShowDropdown = onShowDropdownChange || setInternalShowDropdown;

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchQuery(value);
      setShowDropdown(true);

      if (!value) {
        setValue(name, '', { shouldValidate: true });
      }

      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(() => {
        if (onSearch) onSearch(value);
      }, debounceMs);
    },
    [setValue, name, onSearch, debounceMs, setShowDropdown]
  );

  const handleOptionSelect = useCallback(
    (option: SearchOption) => {
      console.log('🚀 ~ RHFSearchField ~ option:', option);
      setValue(name, option.id, { shouldValidate: true });
      setSearchQuery(getOptionLabel(option));
      setShowDropdown(false);
    },
    [setValue, name, getOptionLabel, setShowDropdown]
  );

  const handleFocus = useCallback(() => {
    setShowDropdown(true);
  }, [setShowDropdown]);

  const handleBlur = useCallback(() => {
    setTimeout(() => setShowDropdown(false), 200);
  }, [setShowDropdown]);

  useEffect(
    () => () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    },
    []
  );

  useEffect(() => {
    if (selectedOption) {
      setSearchQuery(getOptionLabel(selectedOption));
    }
  }, [selectedOption, getOptionLabel]);

  const defaultRenderOption = (option: SearchOption) => (
    <Stack
      key={option.id}
      onClick={() => handleOptionSelect(option)}
      sx={{
        cursor: 'pointer',
        p: 1.5,
        borderBottom: 1,
        borderColor: 'divider',
        '&:last-child': { borderBottom: 0 },
        '&:hover': { bgcolor: 'action.hover' },
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        {getOptionLabel(option)}
      </Typography>
    </Stack>
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack spacing={1} sx={{ position: 'relative' }}>
          <TextField
            fullWidth
            label={isRequired && label ? `${label}*` : label}
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={loading || disabled}
            error={!!error}
            helperText={error?.message || helperText}
            InputProps={{
              endAdornment: loading ? (
                <CircularProgress size={20} />
              ) : (
                <InputAdornment position="end">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />

          {showDropdown && searchQuery && (
            <Stack
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                zIndex: 10,
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                mt: 0.5,
                boxShadow: 3,
                maxHeight: 250,
                overflowY: 'auto',
              }}
            >
              {options.length > 0 ? (
                options.map((option) =>
                  renderOption ? renderOption(option) : defaultRenderOption(option)
                )
              ) : (
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', textAlign: 'center', py: 2 }}
                >
                  {noResultsText}
                </Typography>
              )}
            </Stack>
          )}
        </Stack>
      )}
    />
  );
}
