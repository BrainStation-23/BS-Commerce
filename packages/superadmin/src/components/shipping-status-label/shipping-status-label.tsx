import { forwardRef } from 'react';

import Label from 'src/components/label/label';
import { LabelProps } from 'src/components/label/types';
import { ShippingStatus } from 'src/types/orders';

// ----------------------------------------------------------------------

export interface ShippingStatusLabelProps extends Omit<LabelProps, 'color' | 'children'> {
  status: ShippingStatus;
}

const ShippingStatusLabel = forwardRef<HTMLSpanElement, ShippingStatusLabelProps>(
  ({ status, ...other }, ref) => {
    const getColor = (shippingStatus: ShippingStatus): LabelProps['color'] => {
      switch (shippingStatus) {
        case ShippingStatus.DELIVERED:
          return 'success';
        case ShippingStatus.SHIPPED:
          return 'info';
        case ShippingStatus.PARTIALLY_SHIPPER:
          return 'warning';
        case ShippingStatus.NOT_YET_SHIPPED:
          return 'default';
        default:
          return 'default';
      }
    };

    const formatStatus = (shippingStatus: ShippingStatus): string => shippingStatus.replace(/([A-Z])/g, ' $1').trim();

    return (
      <Label {...other} ref={ref} variant="soft" color={getColor(status)}>
        {formatStatus(status)}
      </Label>
    );
  }
);

ShippingStatusLabel.displayName = 'ShippingStatusLabel';

export default ShippingStatusLabel;
