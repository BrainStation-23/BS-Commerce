import { Box, IconButton, TextField, Typography } from '@mui/material';
import {
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  ZoomOutMap as ZoomOutMapIcon,
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import type { PDFToolbarProps } from './types';

export function PDFToolbar({
  currentPage,
  totalPages,
  zoom,
  onNextPage,
  onPrevPage,
  onGoToPage,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  isPrevDisabled,
  isNextDisabled,
}: PDFToolbarProps) {
  const [pageInput, setPageInput] = useState(currentPage.toString());

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value);
  };

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput, 10);
    if (!Number.isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      onGoToPage(pageNum);
    } else {
      setPageInput(currentPage.toString());
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        p: 1.5,
        bgcolor: 'background.paper',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        flexWrap: 'wrap',
      }}
    >
      {/* Page Navigation */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={onPrevPage} disabled={isPrevDisabled} size="small">
          <NavigateBeforeIcon />
        </IconButton>

        <Box
          component="form"
          onSubmit={handlePageInputSubmit}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <TextField
            size="small"
            value={pageInput}
            onChange={handlePageInputChange}
            onBlur={() => setPageInput(currentPage.toString())}
            sx={{ width: 60 }}
            inputProps={{
              style: { textAlign: 'center', padding: '6px 8px' },
            }}
          />
          <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
            of {totalPages}
          </Typography>
        </Box>

        <IconButton onClick={onNextPage} disabled={isNextDisabled} size="small">
          <NavigateNextIcon />
        </IconButton>
      </Box>

      {/* Zoom Controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={onZoomOut} size="small" title="Zoom Out">
          <ZoomOutIcon />
        </IconButton>

        <Typography variant="body2" sx={{ minWidth: 60, textAlign: 'center' }}>
          {Math.round(zoom * 100)}%
        </Typography>

        <IconButton onClick={onZoomIn} size="small" title="Zoom In">
          <ZoomInIcon />
        </IconButton>

        <IconButton onClick={onResetZoom} size="small" title="Reset Zoom">
          <ZoomOutMapIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

