import { forwardRef } from 'react';

import Label from 'src/components/label/label';
import { LabelProps } from 'src/components/label/types';
import { OrderStatus } from 'src/types/orders';

// ----------------------------------------------------------------------

export interface OrderStatusLabelProps extends Omit<LabelProps, 'color' | 'children'> {
  status: OrderStatus;
}

const OrderStatusLabel = forwardRef<HTMLSpanElement, OrderStatusLabelProps>(
  ({ status, ...other }, ref) => {
    const getColor = (orderStatus: OrderStatus): LabelProps['color'] => {
      switch (orderStatus) {
        case OrderStatus.COMPLETED:
          return 'success';
        case OrderStatus.PROCESSING:
          return 'info';
        case OrderStatus.CANCELLED:
          return 'error';
        case OrderStatus.PENDING:
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

OrderStatusLabel.displayName = 'OrderStatusLabel';

export default OrderStatusLabel;
