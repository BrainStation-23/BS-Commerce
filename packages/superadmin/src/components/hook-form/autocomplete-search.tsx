/* eslint-disable react/prop-types */
import CloseIcon from '@mui/icons-material/Close';
import {
  Autocomplete,
  AutocompleteRenderOptionState,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

type RHFAsyncAutocompleteProps<T> = {
  name: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  sx?: any;
  queryKey: string;
  queryFn: (search: string) => Promise<T[]>;
  getOptionLabel: (option: T) => string;
  getValueFromOption: (option: T) => any;
  initialOptions?: T[];
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement> & { style?: React.CSSProperties },
    option: T,
    state: AutocompleteRenderOptionState
  ) => React.ReactNode;
  isInitialOptionsLoading?: boolean;
  noOptionsText?: string; // Custom text when no options are available
  getIsInactive?: (option: T) => boolean;
  allowExistingInactive?: boolean;
  existingValue?: any;
  multiple?: boolean;
  existingValues?: any[];
};

export default function RHFAsyncAutocompleteWithQuery<T>({
  name,
  label,
  placeholder,
  isRequired = false,
  disabled = false,
  fullWidth = true,
  sx,
  queryKey,
  queryFn,
  getOptionLabel,
  getValueFromOption,
  renderOption,
  initialOptions = [],
  isInitialOptionsLoading = false,
  noOptionsText = 'No options available',
  getIsInactive,
  allowExistingInactive = false,
  existingValue,
  multiple = false,
  existingValues = [],
}: RHFAsyncAutocompleteProps<T>) {
  const { control, setValue } = useFormContext();
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<T[]>(initialOptions);
  const debouncedInput = useDebounce(inputValue);

  // Use refs to track previous values and prevent unnecessary effects
  const previousInitialOptionsRef = useRef<T[]>([]);
  const previousExistingValueRef = useRef(existingValue);
  const isInitializedRef = useRef(false);

  const {
    data: queriedOptions = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: [queryKey, debouncedInput],
    queryFn: () => queryFn(debouncedInput),
    enabled: debouncedInput.length >= (multiple ? 1 : 0),
    staleTime: 5 * 60 * 1000,
  });

  // Initialize options with initialOptions when component mounts
  useEffect(() => {
    // Only run if initialOptions actually changed (deep comparison for arrays)
    const optionsChanged =
      previousInitialOptionsRef.current.length !== initialOptions.length ||
      !previousInitialOptionsRef.current.every((opt, index) => {
        const currentOpt = initialOptions[index];
        return currentOpt && getValueFromOption(opt) === getValueFromOption(currentOpt);
      });

    if (optionsChanged && initialOptions.length > 0) {
      setOptions(initialOptions);
      previousInitialOptionsRef.current = initialOptions;

      // Set initial input value if there's an existing value
      if (existingValue && !multiple && !isInitializedRef.current) {
        const existingOption = initialOptions.find(
          (option) => getValueFromOption(option) === existingValue
        );
        if (existingOption) {
          setInputValue(getOptionLabel(existingOption));
        }
      }
    }
  }, [initialOptions, existingValue, multiple, getValueFromOption, getOptionLabel]);

  // Set form value only once when component mounts with existing value
  useEffect(() => {
    if (
      existingValue &&
      initialOptions.length > 0 &&
      !multiple &&
      !isInitializedRef.current &&
      previousExistingValueRef.current !== existingValue
    ) {
      const existingOption = initialOptions.find(
        (option) => getValueFromOption(option) === existingValue
      );
      if (existingOption) {
        // Only set the form value if it's not already set to avoid unnecessary validation
        setValue(name, existingValue, { shouldValidate: false });
        previousExistingValueRef.current = existingValue;
        isInitializedRef.current = true;
      }
    }
  }, [existingValue, initialOptions, getValueFromOption, name, setValue, multiple]);

  useEffect(() => {
    if (multiple) {
      if (debouncedInput.length >= 1 && queriedOptions.length > 0) {
        setOptions((prevOptions) => {
          const existingOptionIds = new Set(
            prevOptions.map((option) => getValueFromOption(option))
          );
          const newOptions = queriedOptions.filter(
            (option) => !existingOptionIds.has(getValueFromOption(option))
          );
          return [...prevOptions, ...newOptions];
        });
      }
    } else if (debouncedInput) {
      setOptions(queriedOptions);
    } else {
      setOptions(initialOptions);
    }
  }, [debouncedInput, queriedOptions, multiple, getValueFromOption, initialOptions]);

  const getOptionDisabled = useCallback(
    (option: T) => {
      if (!getIsInactive) return false;
      const isInactive = getIsInactive(option);
      if (!isInactive) return false;

      const optionValue = getValueFromOption(option);
      if (multiple) {
        return !(allowExistingInactive && existingValues?.includes(optionValue));
      }
      return !(allowExistingInactive && existingValue === optionValue);
    },
    [
      getIsInactive,
      getValueFromOption,
      multiple,
      allowExistingInactive,
      existingValues,
      existingValue,
    ]
  );

  const renderOptionWithInactiveState = useCallback(
    (props: React.HTMLAttributes<HTMLLIElement> & { style?: React.CSSProperties }, option: T) => {
      const isInactive = getIsInactive ? getIsInactive(option) : false;
      const isDisabled = getOptionDisabled(option);

      return (
        <li
          {...props}
          style={{
            ...props.style,
            backgroundColor: isInactive ? '#e0e0e0' : undefined,
            opacity: isDisabled ? 0.7 : 1,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            pointerEvents: isDisabled ? 'none' : 'auto',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: isDisabled ? 'text.disabled' : 'text.primary',
              fontWeight: isDisabled ? 'normal' : 'medium',
            }}
          >
            {getOptionLabel(option)}
            {isInactive && ' (Inactive)'}
          </Typography>
        </li>
      );
    },
    [getIsInactive, getOptionLabel, getOptionDisabled]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        // Build all options including selected values
        const allOptions = [...options];

        // Add selected values to options if not present
        let currentValues: any[] = [];
        if (multiple) {
          currentValues = field.value || [];
        } else if (field.value) {
          currentValues = [field.value];
        }

        currentValues.forEach((value: any) => {
          const foundInCurrent = allOptions.find((option) => getValueFromOption(option) === value);
          if (!foundInCurrent) {
            const foundInInitial = initialOptions.find(
              (option) => getValueFromOption(option) === value
            );
            const foundInQueried = queriedOptions.find(
              (option) => getValueFromOption(option) === value
            );
            if (foundInInitial) {
              allOptions.push(foundInInitial);
            } else if (foundInQueried) {
              allOptions.push(foundInQueried);
            }
          }
        });

        const selectedOption = multiple
          ? allOptions.filter((option) => (field.value || []).includes(getValueFromOption(option)))
          : allOptions.find((o) => getValueFromOption(o) === field.value) || null;

        const getInputValue = () => {
          if (multiple) {
            return inputValue;
          }
          // If there's an inputValue, use it (allows clearing and typing)
          if (inputValue !== '') {
            return inputValue;
          }
          // If there's a selected option and no input value, show the selected option
          if (selectedOption) {
            return getOptionLabel(selectedOption as T);
          }
          return '';
        };

        return (
          <Autocomplete
            {...field}
            autoComplete={false}
            multiple={multiple}
            fullWidth={fullWidth}
            sx={sx}
            value={selectedOption}
            onChange={(_, val) => {
              if (multiple) {
                const selectedValues = (val as T[]).map((option) => getValueFromOption(option));
                field.onChange(selectedValues);
              } else {
                const singleVal = val as T;
                if (singleVal && getIsInactive && getIsInactive(singleVal)) {
                  const optionValue = getValueFromOption(singleVal);
                  if (allowExistingInactive && existingValue === optionValue) {
                    field.onChange(optionValue);
                    setInputValue(getOptionLabel(singleVal));
                    return;
                  }
                  return;
                }
                field.onChange(singleVal ? getValueFromOption(singleVal) : null);
                // Update inputValue to show the selected option label
                if (singleVal) {
                  setInputValue(getOptionLabel(singleVal));
                } else {
                  setInputValue('');
                }
              }
            }}
            inputValue={getInputValue()}
            onInputChange={(_, val, reason) => {
              setInputValue(val);
              if (!multiple && (reason === 'reset' || reason === 'clear')) {
                setInputValue('');
                setOptions([]);
                // Clear the field value when clearing input
                field.onChange(null);
              } else if (!multiple && reason === 'input' && val === '') {
                // When user manually clears the input, clear the selection
                field.onChange(null);
              } else if (!multiple && reason === 'input' && val !== '' && selectedOption) {
                // When user starts typing after selection, clear the selection to allow new search
                field.onChange(null);
              }
            }}
            options={allOptions}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={(a, b) => getValueFromOption(a) === getValueFromOption(b)}
            loading={isFetching || isInitialOptionsLoading}
            disabled={disabled}
            renderOption={renderOption || renderOptionWithInactiveState}
            noOptionsText={
              debouncedInput.length === 0 && !field.value
                ? 'Start typing to search...'
                : noOptionsText
            }
            clearOnBlur={false}
            blurOnSelect={false}
            clearOnEscape
            getOptionDisabled={getOptionDisabled}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth={fullWidth}
                label={isRequired ? `${label} *` : label}
                placeholder={placeholder}
                error={!!fieldState.error || isError}
                helperText={fieldState.error?.message || (isError ? 'Failed to load options' : '')}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <>{params.InputProps.startAdornment}</>,
                  endAdornment: (
                    <>
                      {isFetching && <CircularProgress color="inherit" size={18} />}
                      {/* Clear Icon - show when there's a selected value or input value */}
                      {!isFetching && ((field.value && !multiple) || (inputValue && !field.value)) && !disabled && (
                        <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                          <CloseIcon
                            fontSize="small"
                            onClick={() => {
                              setInputValue('');
                              field.onChange(multiple ? [] : null);
                              setOptions(initialOptions);
                            }}
                          />
                        </InputAdornment>
                      )}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        );
      }}
    />
  );
}
