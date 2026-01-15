import { forwardRef } from 'react';

import Label from 'src/components/label/label';
import { LabelProps } from 'src/components/label/types';

// ----------------------------------------------------------------------

export interface StatusLabelProps extends Omit<LabelProps, 'color' | 'children'> {
  approvalRequestId?: string | null;
  isActive?: boolean;
}

const StatusLabel = forwardRef<HTMLSpanElement, StatusLabelProps>(
  ({ approvalRequestId, isActive, ...other }, ref) => {
    // If there's an approval request, show pending approval
    if (approvalRequestId) {
      return (
        <Label {...other} ref={ref} variant="soft" color="warning">
          Pending Approval
        </Label>
      );
    }

    // Otherwise, show active/inactive status
    return (
      <Label {...other} ref={ref} variant="soft" color={isActive ? 'success' : 'error'}>
        {isActive ? 'Active' : 'Inactive'}
      </Label>
    );
  }
);

StatusLabel.displayName = 'StatusLabel';

export default StatusLabel;
