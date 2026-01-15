/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, useFormContext } from 'react-hook-form';

import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { countries } from 'src/assets/data';

// ----------------------------------------------------------------------

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'country' | string;
  helperText?: React.ReactNode;
  isRequired?: boolean;
}

export default function RHFAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
>({
  name,
  label,
  type,
  helperText,
  placeholder,
  defaultValue,
  isRequired = false,
  ...other
}: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'>) {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          id={`autocomplete-${name}`}
          autoComplete={false}
          disablePortal={false}
          onChange={(event, newValue) => {
            setValue(name, newValue, { shouldValidate: true });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={isRequired && label ? `${label} *` : label}
              placeholder={placeholder}
              error={!!error}
              helperText={error ? error?.message : helperText}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'off',
                'data-lpignore': 'true', // Ignore LastPass
                'data-form-type': 'other', // Prevent form type detection
              }}
            />
          )}
          defaultValue={defaultValue}
          {...other}
        />
      )}
    />
  );
}

// ----------------------------------------------------------------------

export function getCountry(inputValue: string) {
  const option = countries.filter((country) => country.label === inputValue)[0];

  return {
    ...option,
  };
}
