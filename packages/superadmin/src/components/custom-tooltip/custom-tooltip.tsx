import InfoIcon from '@mui/icons-material/Info';
import { IconButton, Tooltip, TooltipProps } from '@mui/material';
import { ReactNode } from 'react';

// ----------------------------------------------------------------------

// Helper function to get responsive sizing
const getResponsiveSizing = (size: 'small' | 'medium' | 'large', responsive: boolean) => {
  if (!responsive) return {};

  const sizeMap = {
    small: { xs: 32, sm: 28 },
    medium: { xs: 32, sm: 32 },
    large: { xs: 32, sm: 40 },
  };

  const sizes = sizeMap[size];

  return {
    width: sizes,
    height: sizes,
  };
};

export interface CustomTooltipProps {
  title: string | ReactNode;
  placement?: TooltipProps['placement'];
  size?: 'small' | 'medium' | 'large';
  variant?: 'info' | 'help' | 'warning' | 'error';
  disabled?: boolean;
  icon?: ReactNode;
  iconColor?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  responsive?: boolean;
}

export default function CustomTooltip({
  title,
  placement = 'top',
  size = 'small',
  variant = 'info',
  disabled = false,
  icon,
  iconColor = 'inherit',
  responsive = true,
}: CustomTooltipProps) {
  // Icon size mapping
  const iconSizeMap = {
    small: 'small' as const,
    medium: 'medium' as const,
    large: 'large' as const,
  };

  // Icon button size mapping
  const buttonSizeMap = {
    small: 'small' as const,
    medium: 'medium' as const,
    large: 'large' as const,
  };

  // Default icon based on variant
  const defaultIcon = (() => {
    switch (variant) {
      case 'info':
      case 'help':
        return <InfoIcon fontSize={iconSizeMap[size]} />;
      default:
        return <InfoIcon fontSize={iconSizeMap[size]} />;
    }
  })();

  // Use bottom placement on mobile for better UX, otherwise use provided placement
  const finalPlacement = responsive ? 'bottom' : placement;

  if (disabled) {
    return null;
  }

  return (
    <Tooltip
      title={title}
      placement={finalPlacement}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            // Responsive font size
            fontSize: {
              xs: '0.75rem',
              sm: '0.875rem',
            },
            // Responsive max width
            maxWidth: {
              xs: 280,
              sm: 320,
              md: 400,
            },
            // Better mobile touch target
            ...(responsive && {
              '@media (max-width: 600px)': {
                fontSize: '0.875rem',
                padding: '8px 12px',
              },
            }),
          },
        },
        arrow: {
          sx: {
            // Ensure arrow is visible on all themes
            color: 'grey.800',
          },
        },
      }}
    >
      <IconButton
        size={buttonSizeMap[size]}
        color={iconColor}
        sx={{
          // Responsive sizing based on size prop
          ...getResponsiveSizing(size, responsive),
          // Make it more subtle
          opacity: 0.3,
          transition: 'opacity 0.2s ease-in-out',
          '&:hover': {
            opacity: 0.8,
            backgroundColor: 'transparent',
          },
          '&:focus': {
            opacity: 0.8,
          },
          // Better touch target for mobile
          '@media (max-width: 600px)': {
            minWidth: 44,
            minHeight: 44,
            opacity: 0.6,
          },
        }}
      >
        {icon || defaultIcon}
      </IconButton>
    </Tooltip>
  );
}
