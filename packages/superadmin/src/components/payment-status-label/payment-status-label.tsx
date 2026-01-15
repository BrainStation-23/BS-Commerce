import { forwardRef } from 'react';

import Label from 'src/components/label/label';
import { LabelProps } from 'src/components/label/types';
import { PaymentStatus } from 'src/types/orders';

// ----------------------------------------------------------------------

export interface PaymentStatusLabelProps extends Omit<LabelProps, 'color' | 'children'> {
  status: PaymentStatus;
}

const PaymentStatusLabel = forwardRef<HTMLSpanElement, PaymentStatusLabelProps>(
  ({ status, ...other }, ref) => {
    const getColor = (paymentStatus: PaymentStatus): LabelProps['color'] => {
      switch (paymentStatus) {
        case PaymentStatus.PAID:
          return 'success';
        case PaymentStatus.CANCELLED:
          return 'error';
        case PaymentStatus.PENDING:
          return 'warning';
        default:
          return 'default';
      }
    };

    return (
      <Label {...other} ref={ref} variant="soft" color={getColor(status)}>
        {status}
      </Label>
    );
  }
);

PaymentStatusLabel.displayName = 'PaymentStatusLabel';

export default PaymentStatusLabel;
