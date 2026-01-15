import SimpleBar from 'simplebar-react';

import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    width: '4px !important',
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
      width: '4px !important',
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track': {
    width: '4px !important',
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));
