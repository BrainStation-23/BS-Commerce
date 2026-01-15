import { TextFieldProps } from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

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

type StandaloneDatePickerProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
  value?: string | Date | Dayjs | null;
  onChange?: (value: string | null) => void;
  label?: string;
  isRequired?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  readOnly?: boolean;
  disabled?: boolean;
  enabledDatesInMonth?: number[]; // Optional: allow only these days (e.g., [5, 15, 25])
  format?: string; // Return value format
  displayFormat?: string; // Display format for the input field
  error?: boolean;
  helperText?: string;
};

export default function StandaloneDatePicker({
  value,
  onChange,
  label,
  isRequired = false,
  minDate,
  maxDate,
  helperText,
  readOnly = false,
  enabledDatesInMonth,
  disabled = false,
  format = 'YYYY-MM-DD',
  displayFormat,
  error = false,
  ..._other
}: StandaloneDatePickerProps) {
  const [open, setOpen] = useState(false);

  // Optional logic: only allow specified days of the month
  const shouldDisableDate =
    enabledDatesInMonth && enabledDatesInMonth.length > 0
      ? (date: Dayjs | Date) => {
          const dayjsDate = dayjs.isDayjs(date) ? date : dayjs(date);
          return !enabledDatesInMonth.includes(dayjsDate.date());
        }
      : undefined;

  // Ensure value is Dayjs | null for the picker
  let pickerValue: Dayjs | null = null;
  if (value) {
    pickerValue = dayjs(value);
    if (!pickerValue.isValid()) pickerValue = null;
  }

  const labelWithAsterisk = isRequired && label ? `${label} *` : label;

  const slotProps = {
    textField: {
      fullWidth: true,
      error,
      helperText,
      readOnly,
      disabled,
      onClick: () => setOpen(true),
      ...(displayFormat && {
        inputProps: {
          placeholder: displayFormat,
        },
      }),
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

  return (
    <DatePicker
      label={labelWithAsterisk}
      value={pickerValue}
      onChange={(newValue, _context) => {
        let dayjsValue: Dayjs | null = null;
        if (newValue) {
          dayjsValue = dayjs.isDayjs(newValue) ? newValue : dayjs(newValue);
        }
        onChange?.(dayjsValue ? dayjsValue.format(format) : null);
      }}
      minDate={minDate}
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
    />
  );
}
