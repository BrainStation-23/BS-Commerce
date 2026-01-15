/* eslint-disable react/prop-types */
import {
  Autocomplete,
  AutocompleteRenderOptionState,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

type StandaloneAutocompleteProps<T> = {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
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
  noOptionsText?: string;
  getIsInactive?: (option: T) => boolean;
  allowExistingInactive?: boolean;
  existingValue?: any;
  multiple?: boolean;
  existingValues?: any[];
  value?: any;
  onChange?: (value: any) => void;
  onInputChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  clearable?: boolean;
  minSearchLength?: number;
};

export default function StandaloneAutocompleteSearch<T>({
  label,
  placeholder,
  disabled = false,
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
  value,
  onChange,
  onInputChange,
  error = false,
  helperText,
  required = false,
  clearable = true,
  minSearchLength = 0,
}: StandaloneAutocompleteProps<T>) {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<T[]>(initialOptions);
  const [selectedValue, setSelectedValue] = useState<any>(value || (multiple ? [] : null));
  const debouncedInput = useDebounce(inputValue);

  const {
    data: queriedOptions = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: [queryKey, debouncedInput],
    queryFn: () => queryFn(debouncedInput),
    enabled: debouncedInput.length >= minSearchLength,
    staleTime: 5 * 60 * 1000,
  });

  // Initialize options with initialOptions when component mounts
  useEffect(() => {
    if (initialOptions.length > 0) {
      setOptions(initialOptions);

      // Set initial input value if there's an existing value
      if (existingValue && !multiple) {
        const existingOption = initialOptions.find(
          (option) => getValueFromOption(option) === existingValue
        );
        if (existingOption) {
          setInputValue(getOptionLabel(existingOption));
        }
      }
    }
  }, [initialOptions, existingValue, multiple, getValueFromOption, getOptionLabel]);

  // Set initial selected value
  useEffect(() => {
    if (existingValue && initialOptions.length > 0 && !multiple) {
      const existingOption = initialOptions.find(
        (option) => getValueFromOption(option) === existingValue
      );
      if (existingOption) {
        setSelectedValue(existingValue);
      }
    }
  }, [existingValue, initialOptions, getValueFromOption, multiple]);

  // Update options based on search
  useEffect(() => {
    if (multiple) {
      if (debouncedInput.length >= minSearchLength && queriedOptions.length > 0) {
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
  }, [
    debouncedInput,
    queriedOptions,
    multiple,
    getValueFromOption,
    initialOptions,
    minSearchLength,
  ]);

  // Sync external value changes
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const renderOptionWithInactiveState = (
    props: React.HTMLAttributes<HTMLLIElement> & { style?: React.CSSProperties },
    option: T
  ) => {
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
  };

  const getOptionDisabled = (option: T) => {
    if (!getIsInactive) return false;
    const isInactive = getIsInactive(option);
    if (!isInactive) return false;

    const optionValue = getValueFromOption(option);
    if (multiple) {
      return !(allowExistingInactive && existingValues?.includes(optionValue));
    }
    return !(allowExistingInactive && existingValue === optionValue);
  };

  const allOptions = [...options];

  // Add selected values to options if not present
  let currentValues: any[] = [];
  if (multiple) {
    currentValues = selectedValue || [];
  } else if (selectedValue) {
    currentValues = [selectedValue];
  }

  currentValues.forEach((val: any) => {
    const foundInCurrent = allOptions.find((option) => getValueFromOption(option) === val);
    if (!foundInCurrent) {
      const foundInInitial = initialOptions.find((option) => getValueFromOption(option) === val);
      const foundInQueried = queriedOptions.find((option) => getValueFromOption(option) === val);
      if (foundInInitial) {
        allOptions.push(foundInInitial);
      } else if (foundInQueried) {
        allOptions.push(foundInQueried);
      }
    }
  });

  const selectedOption = multiple
    ? allOptions.filter((option) => (selectedValue || []).includes(getValueFromOption(option)))
    : allOptions.find((o) => getValueFromOption(o) === selectedValue) || null;

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

  const handleChange = (val: any) => {
    if (multiple) {
      const selectedValues = (val as T[]).map((option) => getValueFromOption(option));
      setSelectedValue(selectedValues);
      onChange?.(selectedValues);
    } else {
      const singleVal = val as T;
      if (singleVal && getIsInactive && getIsInactive(singleVal)) {
        const optionValue = getValueFromOption(singleVal);
        if (allowExistingInactive && existingValue === optionValue) {
          setSelectedValue(optionValue);
          onChange?.(optionValue);
          setInputValue(getOptionLabel(singleVal));
          return;
        }
        return;
      }
      const newValue = singleVal ? getValueFromOption(singleVal) : null;
      setSelectedValue(newValue);
      onChange?.(newValue);
      // Update inputValue to show the selected option label
      if (singleVal) {
        setInputValue(getOptionLabel(singleVal));
      } else {
        setInputValue('');
      }
    }
  };

  const handleInputChange = (val: string, reason: string) => {
    setInputValue(val);
    onInputChange?.(val);

    if (!multiple && (reason === 'reset' || reason === 'clear')) {
      setInputValue('');
      setOptions([]);
      // Clear the field value when clearing input
      setSelectedValue(null);
      onChange?.(null);
    } else if (!multiple && reason === 'input' && val === '') {
      // When user manually clears the input, clear the selection
      setSelectedValue(null);
      onChange?.(null);
    } else if (!multiple && reason === 'input' && val !== '' && selectedOption) {
      // When user starts typing after selection, clear the selection to allow new search
      setSelectedValue(null);
      onChange?.(null);
    }
  };

  return (
    <Autocomplete
      autoComplete={false}
      multiple={multiple}
      value={selectedOption}
      onChange={(_, val) => handleChange(val)}
      inputValue={getInputValue()}
      onInputChange={(_, val, reason) => handleInputChange(val, reason)}
      options={allOptions}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={(a, b) => getValueFromOption(a) === getValueFromOption(b)}
      loading={isFetching || isInitialOptionsLoading}
      disabled={disabled}
      renderOption={renderOption || renderOptionWithInactiveState}
      noOptionsText={
        debouncedInput.length === 0 && !selectedValue ? 'Start typing to search...' : noOptionsText
      }
      clearOnBlur={false}
      blurOnSelect={false}
      clearOnEscape
      getOptionDisabled={getOptionDisabled}
      disableClearable={!clearable}
      renderInput={(params) => (
        <TextField
          {...params}
          label={required ? `${label} *` : label}
          placeholder={placeholder}
          error={error || isError}
          helperText={helperText || (isError ? 'Failed to load options' : '')}
          InputProps={{
            ...params.InputProps,
            startAdornment: <>{params.InputProps.startAdornment}</>,
            endAdornment: (
              <>
                {isFetching && <CircularProgress color="inherit" size={18} />}
                {/* Clear Icon */}
                {/* {params.InputProps.endAdornment} */}
                {inputValue && !disabled && clearable && (
                  <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                    <CloseIcon
                      fontSize="small"
                      onClick={() => {
                        setInputValue('');
                        setSelectedValue(multiple ? [] : null);
                        onChange?.(multiple ? [] : null);
                        setOptions(initialOptions);
                      }}
                    />
                  </InputAdornment>
                )}
              </>
            ),
          }}
        />
      )}
    />
  );
}
