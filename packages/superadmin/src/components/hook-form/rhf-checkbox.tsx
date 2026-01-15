import { Controller, useFormContext } from 'react-hook-form';

import { CircularProgress } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel, {
  FormControlLabelProps,
  formControlLabelClasses,
} from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

// ----------------------------------------------------------------------

interface RHFCheckboxProps extends Omit<FormControlLabelProps, 'control'> {
  name: string;
  helperText?: React.ReactNode;
}

export function RHFCheckbox({ name, helperText, ...other }: RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel control={<Checkbox {...field} checked={field.value} />} {...other} />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </div>
      )}
    />
  );
}

// ----------------------------------------------------------------------

interface RHFMultiCheckboxProps extends Omit<FormControlLabelProps, 'control' | 'label'> {
  name: string;
  options: { label: string; value: any }[];
  row?: boolean;
  label?: string;
  spacing?: number;
  helperText?: React.ReactNode;
}

export function RHFMultiCheckbox({
  row,
  name,
  label,
  options,
  spacing,
  helperText,
  sx,
  ...other
}: RHFMultiCheckboxProps) {
  const { control } = useFormContext();

  const getSelected = (selectedItems: string[], item: string) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl component="fieldset">
          {label && (
            <FormLabel component="legend" sx={{ typography: 'body2', ml: 1 }}>
              {label}
            </FormLabel>
          )}

          <FormGroup
            sx={{
              ml: 1,
              ...(row && {
                flexDirection: 'row',
              }),
              [`& .${formControlLabelClasses.root}`]: {
                margin: 0,
                width: 'fit-content', // Prevent full width
                '&:not(:last-of-type)': {
                  mb: spacing || 0,
                },
                ...(row && {
                  mr: 0,
                  '&:not(:last-of-type)': {
                    mr: spacing || 2,
                  },
                }),
                // Override label color behavior - keep it consistent
                '& .MuiFormControlLabel-label': {
                  color: 'inherit', // Keep original color
                  '&.Mui-disabled': {
                    color: 'text.disabled',
                  },
                },
                // Ensure label doesn't change color on hover/focus
                '&:hover .MuiFormControlLabel-label': {
                  color: 'inherit',
                },
                '&.Mui-focused .MuiFormControlLabel-label': {
                  color: 'inherit',
                },
              },
              ...sx,
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={field.value.includes(option.value)}
                    onChange={() => field.onChange(getSelected(field.value, option.value))}
                  />
                }
                label={option.label}
                sx={{
                  // Ensure the label area is not clickable, only the checkbox
                  '& .MuiFormControlLabel-label': {
                    pointerEvents: 'none', // Make label non-clickable
                    userSelect: 'none', // Prevent text selection
                  },
                }}
                {...other}
              />
            ))}
          </FormGroup>

          {(!!error || helperText) && (
            <FormHelperText error={!!error} sx={{ mx: 0 }}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

interface RHFMultiCheckboxWithFetchProps {
  name: string;
  label?: string;
  options: { label: string; value: any }[] | undefined;
  isLoading: boolean;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  row?: boolean;
  spacing?: number;
  sx?: any;
}

export function RHFMultiCheckboxWithFetch({
  name,
  label,
  options,
  isLoading,
  helperText,
  fullWidth = false,
  disabled,
  row,
  spacing,
  sx,
}: RHFMultiCheckboxWithFetchProps) {
  if (isLoading) {
    return (
      <FormControl fullWidth={fullWidth} disabled>
        {label && <FormLabel>{label}</FormLabel>}
        <FormHelperText sx={{ display: 'flex', alignItems: 'center' }}>
          <CircularProgress size={20} sx={{ mr: 1 }} />
          Loading...
        </FormHelperText>
      </FormControl>
    );
  }

  if (!isLoading && (!options || options.length === 0)) {
    return (
      <FormControl fullWidth={fullWidth} disabled>
        {label && <FormLabel>{label}</FormLabel>}
        <FormHelperText>No options available</FormHelperText>
      </FormControl>
    );
  }

  return (
    <RHFMultiCheckbox
      name={name}
      label={label}
      options={options || []}
      helperText={helperText}
      disabled={disabled}
      row={row}
      spacing={spacing}
      sx={sx}
    />
  );
}
