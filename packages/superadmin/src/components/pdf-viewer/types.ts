export interface PDFViewerProps {
  fileUrl: string;
  initialZoom?: number;
  showToolbar?: boolean;
  className?: string;
  onLoadSuccess?: (numPages: number) => void;
  onLoadError?: (error: Error) => void;
  initialPage?: number;
  enablePan?: boolean;
  enableZoom?: boolean;
  minZoom?: number;
  maxZoom?: number;
  zoomStep?: number;
}

export interface PDFToolbarProps {
  currentPage: number;
  totalPages: number;
  zoom: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onGoToPage: (page: number) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

