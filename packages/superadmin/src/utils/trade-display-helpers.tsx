import { Typography, SxProps } from '@mui/material';

// Types
export interface TradeChange {
  field: string;
  oldValue?: any;
  newValue?: any;
  actual_value?: any;
  new_value?: any;
}

export interface TradeItemWithFlags {
  is_modified?: boolean;
  is_deleted?: boolean;
  changes?:
    | TradeChange[]
    | {
        actual_price?: number;
        actual_number_of_shares?: number;
        [key: string]: any;
      };
  [key: string]: any;
}

// Row styling for deleted/modified items
export const getRowStyles = (item: TradeItemWithFlags): SxProps => {
  let bgColor = 'inherit';
  if (item.is_deleted) {
    bgColor = 'rgba(255,0,0,0.06)';
  } else if (item.is_modified) {
    bgColor = 'rgba(255, 193, 7, 0.1)';
  }

  return {
    backgroundColor: bgColor,
    opacity: item.is_deleted ? 0.7 : 1,
    '& .MuiTypography-root:not(.status-indicator):not(.old-value)': {
      textDecoration: item.is_deleted ? 'line-through' : 'none',
    },
  };
};

// Status display component
export const StatusIndicator = ({ item }: { item: TradeItemWithFlags }) => {
  let label = 'Original';
  let color: any = 'text.secondary';

  if (item.is_deleted) {
    label = 'Deleted';
    color = 'error.main';
  } else if (item.is_modified) {
    label = 'Modified';
    color = 'warning.main';
  }

  return (
    <Typography
      variant="body2"
      color={color}
      className="status-indicator"
      sx={{ textDecoration: 'none' }}
    >
      {label}
    </Typography>
  );
};

// Helper for displaying modified number values (shares/quantity)
export const DisplayModifiedNumber = ({
  item,
  field,
  currentValue,
  decimals = 0,
}: {
  item: TradeItemWithFlags;
  field: string;
  currentValue: number;
  decimals?: number;
}) => {
  let oldValue: any;

  // Handle different change formats
  if (Array.isArray(item.changes)) {
    const change = item.changes.find(
      (x: any) =>
        x.field === field ||
        (field === 'number_of_shares' && x.field === 'shares') ||
        (field === 'shares' && x.field === 'number_of_shares')
    );
    if (change) {
      oldValue = change.oldValue || change.actual_value;
    }
  } else if (item.changes) {
    if (field === 'price' && item.changes.actual_price !== undefined) {
      oldValue = item.changes.actual_price;
    } else if (
      (field === 'number_of_shares' || field === 'shares') &&
      (item.changes.actual_number_of_shares !== undefined || (item as any).old_shares !== undefined)
    ) {
      oldValue = item.changes.actual_number_of_shares ?? (item as any).old_shares;
    }
  }

  const formatValue = (value: number) =>
    decimals > 0 ? Number(value).toFixed(decimals) : Number(value).toLocaleString();

  return (
    <>
      <Typography variant="body2">{formatValue(currentValue)}</Typography>
      {oldValue !== undefined && (
        <Typography
          variant="caption"
          className="old-value"
          sx={{
            textDecoration: 'line-through !important',
            color: 'text.secondary',
            display: 'block',
            mt: 0.5,
          }}
        >
          {formatValue(oldValue)}
        </Typography>
      )}
    </>
  );
};

// Helper for displaying modified price values
export const DisplayModifiedPrice = ({
  item,
  currentValue,
  decimals = 2,
}: {
  item: TradeItemWithFlags;
  currentValue: number;
  decimals?: number;
}) => (
  <DisplayModifiedNumber
    item={item}
    field="price"
    currentValue={currentValue}
    decimals={decimals}
  />
);
