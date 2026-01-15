import CircularProgress from '@mui/material/CircularProgress';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { amountBeautify, amountBeautifyWithFourDecimals, formatIncomeRange } from 'src/utils/amount-beautify';

type Props = TextFieldProps & {
  name: string;
  allowZero?: boolean;
  isRequired?: boolean;
  loading?: boolean;
  format?: 'amount' | 'income-range' | 'amount-four-decimals';
  numberFormat?: 'intl' | 'bd';
};

export default function RHFTextField({
  name,
  helperText,
  type,
  allowZero = true,
  isRequired = false,
  label,
  loading = false,
  format,
  numberFormat = 'intl',
  ...other
}: Props) {
  const { control, watch } = useFormContext();
  const fieldValue = watch(name);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wheelHandlerRef = useRef<((e: WheelEvent) => void) | null>(null);
  const isFocusedRef = useRef<boolean>(false);

  // Local input state to handle typing, including decimals
  const [inputValue, setInputValue] = useState<string>(
    fieldValue !== undefined && fieldValue !== null ? String(fieldValue) : ''
  );
  useEffect(() => {
    // Only sync from fieldValue when the field is not focused
    // This prevents overwriting user input while they're typing
    if (!isFocusedRef.current) {
      if (fieldValue !== undefined && fieldValue !== null) {
        setInputValue(String(fieldValue));
      } else {
        setInputValue('');
      }
    }
  }, [fieldValue]);

  // Cleanup on unmount just in case
  useEffect(
    () => () => {
      if (inputRef.current && wheelHandlerRef.current) {
        inputRef.current.removeEventListener('wheel', wheelHandlerRef.current as EventListener);
        wheelHandlerRef.current = null;
      }
    },
    []
  );

  // Keep input in sync with form value (formatted display)
  const displayValue = useMemo(() => {
    if (format === 'amount') {
      return amountBeautify(inputValue, numberFormat).displayValue;
    }
    if (format === 'amount-four-decimals') {
      return amountBeautifyWithFourDecimals(inputValue, numberFormat).displayValue;
    }
    if (format === 'income-range') {
      const value = inputValue != null ? String(inputValue) : inputValue;
      return formatIncomeRange(value).displayValue;
    }
    return inputValue;
  }, [inputValue, format, numberFormat]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        // keep the original `field` available for onChange/onBlur etc.
        const { ref, ...fieldWithoutRef } = field;

        // helper to attach the controller ref and keep our inputRef
        const handleInputRef = (el: HTMLInputElement | null) => {
          inputRef.current = el;
          // call react-hook-form's ref so validation/focus works
          if (typeof ref === 'function') ref(el);
          else if (ref && typeof ref === 'object') (ref as any).current = el;
        };

        const hasValue =
          field.value !== undefined &&
          field.value !== null &&
          field.value !== '' &&
          (type !== 'number' || field.value !== 0 || allowZero);

        return (
          <TextField
            {...fieldWithoutRef}
            inputRef={handleInputRef} // attach to the actual input
            fullWidth
            type={format === 'amount' || format === 'amount-four-decimals' || format === 'income-range' ? 'text' : type}
            value={displayValue}
            onFocus={(event) => {
              // Mark field as focused to prevent useEffect from overwriting inputValue
              isFocusedRef.current = true;

              // position cursor at the end
              setTimeout(() => {
                const input = (event.target as HTMLInputElement) || inputRef.current;
                if (input) {
                  const { value } = input;
                  const length = value?.length ?? 0;
                  try {
                    input.setSelectionRange(length, length);
                  } catch {
                    /* ignore */
                  }
                }
              }, 0);

              // add non-passive wheel listener to prevent mouse-wheel changing the number
              if ((type === 'number' || format === undefined) && inputRef.current) {
                // ensure we don't add multiple handlers
                if (!wheelHandlerRef.current) {
                  const handler = (e: WheelEvent) => {
                    // only prevent when input is focused and is number type
                    e.preventDefault();
                  };
                  wheelHandlerRef.current = handler;
                  // passive: false allows preventDefault inside handler
                  inputRef.current.addEventListener('wheel', handler as EventListener, {
                    passive: false,
                  });
                }
              }

              if (other.onFocus) other.onFocus(event);
            }}
            onBlur={(event) => {
              // Mark field as not focused, allowing useEffect to sync from fieldValue
              isFocusedRef.current = false;

              // remove wheel listener on blur
              if (inputRef.current && wheelHandlerRef.current) {
                inputRef.current.removeEventListener(
                  'wheel',
                  wheelHandlerRef.current as EventListener
                );
                wheelHandlerRef.current = null;
              }
              // call react-hook-form's onBlur too
              field.onBlur();
              if (other.onBlur) other.onBlur(event);
            }}
            onChange={(event) => {
              const { value } = event.target;

              if (format === 'amount') {
                setInputValue(value);

                const numericValue = Number(value.replace(/,/g, ''));
                if (!Number.isNaN(numericValue)) {
                  field.onChange(numericValue);
                } else {
                  field.onChange(undefined as any);
                }
                return;
              }

              if (format === 'amount-four-decimals') {
                setInputValue(value);

                const numericValue = Number(value.replace(/,/g, ''));
                if (!Number.isNaN(numericValue)) {
                  field.onChange(numericValue);
                } else {
                  field.onChange(undefined as any);
                }
                return;
              }

              if (format === 'income-range') {
                const cleaned = value.replace(/,/g, '');
                setInputValue(cleaned);
                field.onChange(cleaned);
                return;
              }

              if (type === 'number') {
                setInputValue(value);
                if (value === '') {
                  field.onChange(null as any);
                  return;
                }
                if (value.includes('e') || value.includes('E')) {
                  // revert display to last good value
                  if (inputRef.current) inputRef.current.value = String(field.value ?? '');
                  return;
                }
                const parsed = Number(value);
                if (!Number.isNaN(parsed)) field.onChange(parsed);
                else field.onChange(undefined as any);
              } else {
                setInputValue(value);
                field.onChange(value);
              }
            }}
            onKeyDown={(event) => {
              // block invalid keys for amount format
              if (format === 'amount' || format === 'amount-four-decimals') {
                // allow common keyboard shortcuts like copy/paste/cut/select-all
                if (event.ctrlKey || event.metaKey) {
                  const key = event.key.toLowerCase();
                  if (['a', 'c', 'v', 'x'].includes(key)) {
                    // let MUI / browser handle it normally
                    if (other.onKeyDown) other.onKeyDown(event);
                    return;
                  }
                }

                const isAllowedKey =
                  /[0-9]/.test(event.key) ||
                  event.key === '.' ||
                  event.key === ',' ||
                  [
                    'Backspace',
                    'Delete',
                    'ArrowLeft',
                    'ArrowRight',
                    'Tab',
                    'Control',
                    'a',
                  ].includes(event.key);
                if (!isAllowedKey) event.preventDefault();
              }

              // block invalid keys for income-range format
              if (format === 'income-range') {
                if (event.ctrlKey || event.metaKey) {
                  const key = event.key.toLowerCase();
                  if (['a', 'c', 'v', 'x'].includes(key)) {
                    if (other.onKeyDown) other.onKeyDown(event);
                    return;
                  }
                }

                const isAllowedKey =
                  /[0-9]/.test(event.key) ||
                  event.key === '-' ||
                  event.key === ',' ||
                  [
                    'Backspace',
                    'Delete',
                    'ArrowLeft',
                    'ArrowRight',
                    'Tab',
                    'Control',
                    'a',
                  ].includes(event.key);
                if (!isAllowedKey) event.preventDefault();
              }

              // for number inputs prevent scientific notation and arrow increment
              if (type === 'number') {
                if (['e', 'E'].includes(event.key)) event.preventDefault();
                if (['ArrowUp', 'ArrowDown'].includes(event.key)) event.preventDefault(); // stop keyboard inc/dec
              }

              if (other.onKeyDown) other.onKeyDown(event);
            }}
            error={!!error}
            label={isRequired && label ? `${label} *` : label}
            helperText={error ? error.message : helperText}
            InputLabelProps={{
              ...other.InputLabelProps,
              shrink: hasValue ? true : other.InputLabelProps?.shrink,
            }}
            InputProps={{
              ...other.InputProps,
              endAdornment: loading ? (
                <CircularProgress size={20} />
              ) : (
                other.InputProps?.endAdornment
              ),
            }}
            disabled={loading}
            {...other}
          />
        );
      }}
    />
  );
}
