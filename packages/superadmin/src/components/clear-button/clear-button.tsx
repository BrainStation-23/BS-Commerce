import { Button, ButtonProps } from '@mui/material';

interface ClearButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  onClear?: () => void;
  text?: string;
  // searchValue?: string;
}

export default function ClearButton({
  onClear,
  // searchValue,
  text = 'Clear',
  disabled,
  ...other
}: ClearButtonProps) {
  return (
    <Button
      onClick={onClear}
      disabled={disabled}
      variant="text"
      sx={() => ({
        textTransform: 'none',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.2,
        px: 0,
        py: 0,
        minWidth: 'auto',
        position: 'relative',
        color: 'text.primary',
        textDecoration: 'none',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '1.5px',
          backgroundColor: 'text.primary',
          pointerEvents: 'none',
        },
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'text.primary',
          textDecoration: 'none',
          '&::after': {
            backgroundColor: 'text.primary',
          },
        },
      })}
      {...other}
    >
      {text}
    </Button>
  );
}
