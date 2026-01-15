import { TextFieldProps } from '@mui/material/TextField';
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { calculateMinDateWithGap } from 'src/utils/calculate-min-date-with-gap';

// ----------------------------------------------------------------------

// Custom day component to highlight enabled dates
const CustomDay = ({
  enabledDatesInMonth,
  ...props
}: PickersDayProps & { enabledDatesInMonth?: number[] }) => {
  const { day, ...other } = props;
  // Convert day to Dayjs if it's a Date object
  const dayjsDay = dayjs.isDayjs(day) ? day : dayjs(day);
  const isEnabled = enabledDatesInMonth?.includes(dayjsDay.date());

  return (
    <PickersDay
      {...other}
      day={day}
      sx={{
        ...(isEnabled && {
          fontWeight: 'bold',
          backgroundColor: 'primary.lighter',

          '&:hover': {
            backgroundColor: 'primary.dark',
            color: 'white',
          },
        }),
      }}
    />
  );
};

type RHFDatePickerProps = Omit<TextFieldProps, 'name'> & {
  name: string;
  label?: string;
  isRequired?: boolean;
  mode?: 'dateOnly' | 'timeOnly' | 'dateTime';
  minDate?: Dayjs;
  maxDate?: Dayjs;
  readOnly?: boolean;
  disabled?: boolean;
  enabledDatesInMonth?: number[]; // Optional: allow only these days (e.g., [5, 15, 25])
  useMinDateWithGap?: boolean; // Enable automatic min date calculation with gap
  minGapDays?: number; // Minimum gap in days (default: 5)
  format?: string; // Return value format
  displayFormat?: string; // Display format for the input field
  views?: Array<'year' | 'month' | 'day'>; // Control which views are available
  FormHelperTextProps?: TextFieldProps['FormHelperTextProps']; // Allow custom FormHelperTextProps
};

export default function RHFDatePicker({
  name,
  label,
  isRequired = false,
  mode = 'dateTime',
  minDate,
  maxDate,
  helperText,
  readOnly = false,
  enabledDatesInMonth,
  disabled = false,
  useMinDateWithGap = false,
  minGapDays = 5,
  format = 'YYYY-MM-DD',
  displayFormat,
  views = ['year', 'month', 'day'],
  FormHelperTextProps,
  ..._other
}: RHFDatePickerProps) {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  // Calculate minimum date with gap if enabled
  const calculatedMinDate =
    useMinDateWithGap && enabledDatesInMonth
      ? (() => {
          const calculatedDate = calculateMinDateWithGap(enabledDatesInMonth, minGapDays);
          return calculatedDate ? dayjs(calculatedDate) : undefined;
        })()
      : undefined;

  // Use provided minDate or calculated minDate with gap
  const effectiveMinDate = calculatedMinDate || minDate;

  // Optional logic: only allow specified days of the month
  const shouldDisableDate =
    enabledDatesInMonth && enabledDatesInMonth.length > 0
      ? (date: Dayjs | Date) => {
          const dayjsDate = dayjs.isDayjs(date) ? date : dayjs(date);
          return !enabledDatesInMonth.includes(dayjsDate.date());
        }
      : undefined;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        // Ensure value is Dayjs | null for the picker
        let pickerValue: Dayjs | null = null;
        if (field.value) {
          pickerValue = dayjs(field.value);
          if (!pickerValue.isValid()) pickerValue = null;
        }

        const labelWithAsterisk = isRequired && label ? `${label} *` : label;

        const slotProps = {
          textField: {
            fullWidth: true,
            error: !!error,
            helperText: error ? error?.message : helperText,
            readOnly,
            disabled,
            onClick: () => setOpen(true),
            ...(displayFormat && {
              inputProps: {
                placeholder: displayFormat,
              },
            }),
            ...(FormHelperTextProps && { FormHelperTextProps }),
          },
        };

        const slots =
          enabledDatesInMonth && enabledDatesInMonth.length > 0
            ? {
                day: (props: PickersDayProps) => (
                  <CustomDay {...props} enabledDatesInMonth={enabledDatesInMonth} />
                ),
              }
            : undefined;

        if (mode === 'dateOnly') {
          return (
            <DatePicker
              label={labelWithAsterisk}
              value={pickerValue}
              onChange={(newValue, _context) => {
                let dayjsValue: Dayjs | null = null;
                if (newValue) {
                  dayjsValue = dayjs.isDayjs(newValue) ? newValue : dayjs(newValue);
                }
                field.onChange(dayjsValue ? dayjsValue.format(format) : null);
              }}
              minDate={effectiveMinDate}
              maxDate={maxDate}
              shouldDisableDate={shouldDisableDate}
              slotProps={slotProps}
              slots={slots}
              readOnly={readOnly}
              disabled={disabled}
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              format={displayFormat || 'DD/MM/YYYY'}
              views={views}
            />
          );
        }

        if (mode === 'timeOnly') {
          return (
            <TimePicker
              label={labelWithAsterisk}
              value={pickerValue}
              onChange={(newValue, _context) => {
                let dayjsValue: Dayjs | null = null;
                if (newValue) {
                  dayjsValue = dayjs.isDayjs(newValue) ? newValue : dayjs(newValue);
                }
                field.onChange(dayjsValue ? dayjsValue.toISOString() : null);
              }}
              slotProps={slotProps}
            />
          );
        }

        return (
          <DateTimePicker
            label={labelWithAsterisk}
            value={pickerValue}
            onChange={(newValue, _context) => {
              let dayjsValue: Dayjs | null = null;
              if (newValue) {
                dayjsValue = dayjs.isDayjs(newValue) ? newValue : dayjs(newValue);
              }
              field.onChange(dayjsValue ? dayjsValue.toISOString() : null);
            }}
            minDate={effectiveMinDate}
            maxDate={maxDate}
            shouldDisableDate={shouldDisableDate}
            slotProps={slotProps}
            slots={slots}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            format={displayFormat || 'DD MMM, YYYY HH:mm'}
            views={views}
          />
        );
      }}
    />
  );
}
