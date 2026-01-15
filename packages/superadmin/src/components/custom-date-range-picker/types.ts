import { Dayjs } from 'dayjs';

// ----------------------------------------------------------------------

export type DateRangePickerProps = {
  title?: string;
  variant?: 'input' | 'calendar';
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  onChangeStartDate: (date: Dayjs | null) => void;
  onChangeEndDate: (date: Dayjs | null) => void;
  open: boolean;
  onClose: VoidFunction;
  error?: boolean;
  maxDate?: Dayjs;
};

