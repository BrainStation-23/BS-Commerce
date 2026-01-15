import { forwardRef } from 'react';

import Label from 'src/components/label/label';
import { LabelProps } from 'src/components/label/types';

// ----------------------------------------------------------------------

export interface StatusLevelProps extends Omit<LabelProps, 'color' | 'children'> {
  value: boolean;
  trueLabel?: string;
  falseLabel?: string;
  trueColor?: 'success' | 'error' | 'warning' | 'info' | 'default';
  falseColor?: 'success' | 'error' | 'warning' | 'info' | 'default';
}

const StatusLevel = forwardRef<HTMLSpanElement, StatusLevelProps>(
  ({ value, trueLabel = 'Yes', falseLabel = 'No', trueColor = 'success', falseColor = 'default', ...other }, ref) => (
    <Label {...other} ref={ref} variant="soft" color={value ? trueColor : falseColor}>
      {value ? trueLabel : falseLabel}
    </Label>
  )
);

StatusLevel.displayName = 'StatusLevel';

export default StatusLevel;
