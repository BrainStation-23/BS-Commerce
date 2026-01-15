/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
  control: any;
  onChangeFilter?: (value: any | null) => void;
}

export default function CustomRHFAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
>({
  name,
  label,
  helperText,
  placeholder,
  control,
  onChangeFilter,
  ...other
}: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          id={`autocomplete-${name}`}
          onChange={(event, newValue) => {
            field.onChange(newValue);
            if (onChangeFilter) {
              onChangeFilter(newValue); // Trigger the filter action
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              placeholder={placeholder}
              error={!!error}
              helperText={error ? error.message : helperText}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // Disable browser autocomplete
              }}
              fullWidth
            />
          )}
          {...other}
        />
      )}
    />
  );
}
