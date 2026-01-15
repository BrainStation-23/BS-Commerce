/**
 * PDF Viewer Component - Simplified Version
 * Minimal configuration for maximum compatibility
 */
import WarningIcon from '@mui/icons-material/Warning';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { PDFToolbar } from './pdf-toolbar';
import type { PDFViewerProps } from './types';

// Configure PDF.js worker - Use CDN to match the react-pdf version
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function PDFViewerSimple({
  fileUrl,
  initialZoom = 1,
  showToolbar = true,
  className,
  onLoadSuccess,
  onLoadError,
  initialPage = 1,
  enablePan = true,
  enableZoom = true,
  minZoom = 0.5,
  maxZoom = 3,
  zoomStep = 0.2,
}: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const transformWrapperRef = useRef<any>(null);

  // Handle successful PDF load
  const handleDocumentLoadSuccess = useCallback(
    ({ numPages: pages }: { numPages: number }) => {
      setNumPages(pages);
      setIsLoading(false);
      setError(null);
      onLoadSuccess?.(pages);
    },
    [onLoadSuccess]
  );

  // Handle PDF load error
  const handleDocumentLoadError = useCallback(
    (err: Error) => {
      console.error('Error loading PDF:', err);
      setError(err);
      setIsLoading(false);
      onLoadError?.(err);
    },
    [onLoadError]
  );

  // Navigation handlers
  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, numPages));
  }, [numPages]);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleGoToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= numPages) {
        setCurrentPage(page);
      }
    },
    [numPages]
  );

  // Zoom handlers
  const handleZoomIn = useCallback(() => {
    transformWrapperRef.current?.zoomIn(zoomStep);
  }, [zoomStep]);

  const handleZoomOut = useCallback(() => {
    transformWrapperRef.current?.zoomOut(zoomStep);
  }, [zoomStep]);

  const handleResetZoom = useCallback(() => {
    transformWrapperRef.current?.resetTransform();
  }, []);

  // Get current zoom level
  const getCurrentZoom = () =>
    transformWrapperRef.current?.instance?.transformState?.scale || initialZoom;

  // Measure container dimensions for responsive PDF rendering
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Reset to first page when file URL changes
  useEffect(() => {
    setCurrentPage(initialPage);
    setIsLoading(true);
    setError(null);
  }, [fileUrl, initialPage]);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', width: '100%' }}
      className={className}
    >
      {/* Toolbar */}
      {showToolbar && numPages > 0 && (
        <PDFToolbar
          currentPage={currentPage}
          totalPages={numPages}
          zoom={getCurrentZoom()}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
          onGoToPage={handleGoToPage}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onResetZoom={handleResetZoom}
          isPrevDisabled={currentPage <= 1}
          isNextDisabled={currentPage >= numPages}
        />
      )}

      {/* PDF Viewer Container */}
      <Box
        ref={containerRef}
        sx={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Document
          file={fileUrl}
          onLoadSuccess={handleDocumentLoadSuccess}
          onLoadError={handleDocumentLoadError}
          loading={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={32} />
                <Typography variant="body2" color="text.secondary">
                  Loading PDF...
                </Typography>
              </Box>
            </Box>
          }
          error={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 4,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  textAlign: 'center',
                }}
              >
                <WarningIcon sx={{ fontSize: 48, color: 'error.main' }} />
                <Typography variant="body2" fontWeight={500} color="error.main">
                  Failed to load PDF
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {error?.message || 'An unknown error occurred'}
                </Typography>
              </Box>
            </Box>
          }
        >
          {!isLoading && !error && numPages > 0 && (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {showToolbar ? (
                // Single page with toolbar navigation - using same rendering as without toolbar
                <TransformWrapper
                  ref={transformWrapperRef}
                  initialScale={1}
                  minScale={0.5}
                  maxScale={5}
                  disabled={false}
                  panning={{ disabled: false, velocityDisabled: true }}
                  wheel={{ disabled: false, step: 0.1 }}
                  doubleClick={{ disabled: false, step: 0.5 }}
                  pinch={{ disabled: false }}
                  centerOnInit
                  centerZoomedOut
                  alignmentAnimation={{ disabled: true }}
                  limitToBounds={false}
                  smooth={false}
                >
                  <TransformComponent
                    wrapperStyle={{ width: '100%', height: '100%', overflow: 'auto' }}
                    contentStyle={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '100%',
                    }}
                  >
                    <Page
                      pageNumber={currentPage}
                      height={containerHeight ? containerHeight - 60 : 600}
                      renderTextLayer
                      renderAnnotationLayer
                      loading={
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <CircularProgress size={24} />
                        </Box>
                      }
                    />
                  </TransformComponent>
                </TransformWrapper>
              ) : (
                // Full page view without toolbar - fit to container with zoom enabled
                <TransformWrapper
                  ref={transformWrapperRef}
                  initialScale={1}
                  minScale={0.5}
                  maxScale={5}
                  disabled={false}
                  panning={{ disabled: false, velocityDisabled: true }}
                  wheel={{ disabled: false, step: 0.1 }}
                  doubleClick={{ disabled: false, step: 0.5 }}
                  pinch={{ disabled: false }}
                  centerOnInit
                  centerZoomedOut
                  alignmentAnimation={{ disabled: true }}
                  limitToBounds={false}
                  smooth={false}
                >
                  <TransformComponent
                    wrapperStyle={{ width: '100%', height: '100%', overflow: 'auto' }}
                    contentStyle={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '100%',
                    }}
                  >
                    <Page
                      pageNumber={1}
                      height={containerHeight ? containerHeight - 60 : 600}
                      renderTextLayer
                      renderAnnotationLayer
                      loading={
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <CircularProgress size={24} />
                        </Box>
                      }
                    />
                  </TransformComponent>
                </TransformWrapper>
              )}
            </Box>
          )}
        </Document>
      </Box>
    </Box>
  );
}
