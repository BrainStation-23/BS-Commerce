import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SxProps, Theme } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

// ----------------------------------------------------------------------

type RHFSelectProps = TextFieldProps & {
  name: string;
  native?: boolean;
  maxHeight?: boolean | number;
  children: React.ReactNode;
  isRequired?: boolean;
  PaperPropsSx?: SxProps<Theme>;
  isLoading?: boolean;
};

export function RHFSelect({
  name,
  native,
  label,
  isRequired = false,
  maxHeight = 220,
  helperText,
  children,
  PaperPropsSx,
  isLoading = false,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
                  }),
                  ...PaperPropsSx,
                },
              },
            },
            sx: { textTransform: 'capitalize' },
          }}
          label={isRequired && label ? `${label} *` : label}
          error={!!error}
          helperText={error ? error?.message : helperText}
          InputProps={{
            ...other.InputProps,
            endAdornment: isLoading ? (
              <CircularProgress size={20} />
            ) : (
              other.InputProps?.endAdornment
            ),
          }}
          {...other}
        >
          {isLoading ? (
            <MenuItem>
              <CircularProgress size={20} /> Loading...
            </MenuItem>
          ) : (
            children
          )}
        </TextField>
      )}
    />
  );
}

// ----------------------------------------------------------------------

type RHFMultiSelectProps = FormControlProps & {
  name: string;
  label?: string;
  chip?: boolean;
  checkbox?: boolean;
  placeholder?: string;
  helperText?: React.ReactNode;
  options: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  isLoading?: boolean;
};

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  isLoading = false,
  ...other
}: RHFMultiSelectProps) {
  const { control } = useFormContext();

  const renderValues = (selectedIds: string[]) => {
    const selectedItems = options.filter((item) => selectedIds.includes(item.value));

    if (!selectedItems.length && placeholder) {
      return <Box sx={{ color: 'text.disabled' }}>{placeholder}</Box>;
    }

    if (chip) {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selectedItems.map((item) => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems.map((item) => item.label).join(', ');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} {...other}>
          {label && <InputLabel id={name}> {label} </InputLabel>}

          <Select
            {...field}
            multiple
            displayEmpty={!!placeholder}
            id={`multiple-${name}`}
            labelId={name}
            label={label}
            renderValue={renderValues}
          >
            {isLoading ? (
              <MenuItem>
                <CircularProgress size={20} /> Loading...
              </MenuItem>
            ) : (
              options.map((option) => {
                const selected = field.value.includes(option.value);

                return (
                  <MenuItem 
                    key={option.value} 
                    value={option.value}
                    disabled={option.disabled}
                    sx={{
                      ...(option.disabled && {
                        backgroundColor: 'action.disabledBackground',
                        color: 'text.disabled',
                        '&:hover': {
                          backgroundColor: 'action.disabledBackground',
                        },
                      }),
                    }}
                  >
                    {checkbox && <Checkbox size="small" disableRipple checked={selected} />}

                    {option.label} {option.disabled && '(Inactive)'}
                  </MenuItem>
                );
              })
            )}
          </Select>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

// ----------------------------------------------------------------------

type HierarchicalOption = {
  id: string;
  name: string;
  level: number;
};

type RHFHierarchicalSelectProps = Omit<TextFieldProps, 'children'> & {
  name: string;
  options: HierarchicalOption[];
  maxHeight?: boolean | number;
  PaperPropsSx?: SxProps<Theme>;
  isLoading?: boolean;
};

export function RHFHierarchicalSelect({
  name,
  options = [],
  maxHeight = 220,
  helperText,
  PaperPropsSx,
  isLoading = false,
  ...other
}: RHFHierarchicalSelectProps) {
  const { control } = useFormContext();

  const getTreePrefix = (level: number, index: number) => {
    const spaces = '  '.repeat(level * 2);
    const connector = index === 0 ? '└─' : '├─';
    return `${spaces}${connector}`;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{
            renderValue: (selected) => {
              // Find the selected option and display only the clean name
              const selectedOption = options.find((option) => option.id === selected);
              return selectedOption ? selectedOption.name : '';
            },
            MenuProps: {
              PaperProps: {
                sx: {
                  maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
                  ...PaperPropsSx,
                },
              },
            },
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        >
          {isLoading ? (
            <MenuItem>
              <CircularProgress size={20} /> Loading...
            </MenuItem>
          ) : (
            options.map((option, index) => (
              <MenuItem
                key={option.id}
                value={option.id}
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  py: 0.75,
                  px: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <span style={{ color: '#666', whiteSpace: 'pre' }}>
                    {getTreePrefix(option.level, index)}
                  </span>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span style={{ fontWeight: 500 }}>{option.name}</span>
                  </Box>
                </Box>
              </MenuItem>
            ))
          )}
        </TextField>
      )}
    />
  );
}
