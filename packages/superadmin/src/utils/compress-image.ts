/**
 * Image Compression Utility
 *
 * Features:
 * - ✅ Type-safe, robust, and production-ready
 * - ✅ Uses Compressor.js (industry standard)
 * - ✅ Automatically skips non-image files
 * - ✅ Smart presets (Photo, Document, Signature, Avatar, Banner)
 * - ✅ Safe fallbacks and early returns
 */

import Compressor from 'compressorjs';

// -----------------------------------------------------------------------------
// Interfaces & Types
// -----------------------------------------------------------------------------

export enum CompressionMode {
  /** Use percentage-based scaling (default, most flexible) */
  PERCENTAGE = 'percentage',
  // /** Use fixed dimensions (maxWidth/maxHeight) */
  // DIMENSIONS = 'dimensions',
  // /** Use both: scale by percentage first, then enforce max dimensions */
  // HYBRID = 'hybrid',
}

export interface CompressImageOptions {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  width?: number;
  height?: number;
  mimeType?: string;
  convertTypes?: string | string[];
  strict?: boolean;
  checkOrientation?: boolean;
  /** Scale image by percentage (0-100) */
  scalePercentage?: number;
  /** Compression mode: percentage (default), dimensions, or hybrid */
  mode?: CompressionMode;
  imageType?: ImageType;
}

export enum ImageType {
  PHOTO = 'photo',
  DOCUMENT = 'document',
  SIGNATURE = 'signature',
  GENERAL = 'general',
}

export interface SmartCompressOptions {
  sizeThresholdMB?: number;
  widthThresholdPx?: number;
  imageType?: ImageType;
  overrideOptions?: CompressImageOptions;
}

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

export const isImageFile = (file: File | Blob): boolean =>
  !!file.type && file.type.startsWith('image/');

const toFile = (file: File | Blob, name?: string): File =>
  file instanceof File
    ? file
    : new File([file], name || 'image', {
        type: file.type,
        lastModified: Date.now(),
      });

const getImageDimensions = (file: File | Blob): Promise<{ width: number; height: number }> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    // Set timeouts to prevent hanging (5 seconds for large images)
    const loadTimeout = setTimeout(() => {
      URL.revokeObjectURL(url);
      reject(new Error('Image load timeout'));
    }, 5000);

    img.onload = () => {
      clearTimeout(loadTimeout);
      URL.revokeObjectURL(url);
      resolve({ width: img.width, height: img.height });
    };

    img.onerror = () => {
      clearTimeout(loadTimeout);
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };

    img.src = url;
  });

// -----------------------------------------------------------------------------
// Validation
// -----------------------------------------------------------------------------

const validateFile = (
  file: File | Blob
): { valid: boolean; fileName: string; fileSizeMB: string } => {
  const fileName = file instanceof File ? file.name : 'blob';
  const fileSizeMB = (file.size / 1024 / 1024).toFixed(2);

  if (!isImageFile(file) || !file || file.size === 0) {
    // console.log(`⏭️ Skipping compression for ${fileName}: Invalid or empty file`);
    return { valid: false, fileName, fileSizeMB };
  }

  if (!file.type || typeof file.type !== 'string' || !file.type.startsWith('image/')) {
    // console.warn(`⚠️ Invalid MIME type for ${fileName} (${file.type}). Returning original file.`);
    return { valid: false, fileName, fileSizeMB };
  }

  if (!(file instanceof File) && !(file instanceof Blob)) {
    // console.warn(`⚠️ Invalid file type for ${fileName}. Returning original file.`);
    return { valid: false, fileName, fileSizeMB };
  }

  if (file.size === 0 || file.size > 500 * 1024 * 1024) {
    // console.warn(
    //   `⚠️ Invalid file size for ${fileName} (${fileSizeMB} MB). Returning original file.`
    // );
    return { valid: false, fileName, fileSizeMB };
  }

  // console.log(`✓ Valid file for compression: ${fileName} (${fileSizeMB} MB, ${file.type})`);
  return { valid: true, fileName, fileSizeMB };
};

// -----------------------------------------------------------------------------
// Compression Options Builder
// -----------------------------------------------------------------------------

const buildCompressionOptions = async (
  file: File | Blob,
  options: CompressImageOptions | undefined,
  fileSizeMB: string
): Promise<Record<string, any>> => {
  const baseOptions: Record<string, any> = {
    quality: options?.quality ?? 0.8,
    strict: false,
    checkOrientation: options?.checkOrientation ?? true,
  };

  // const mode = options?.mode ?? CompressionMode.PERCENTAGE;
  const isVeryLargeFile = file.size > 5 * 1024 * 1024;

  // Use PERCENTAGE mode (only mode currently active)
  const percentage = options?.scalePercentage ?? 80;

  if (percentage > 0 && percentage <= 100) {
    try {
      const dimensions = await getImageDimensions(file);
      const scale = percentage / 100;
      const scaledWidth = Math.round(dimensions.width * scale);
      const scaledHeight = Math.round(dimensions.height * scale);

      baseOptions.maxWidth = scaledWidth;
      baseOptions.maxHeight = scaledHeight;

      // console.log(
      //   `📐 [PERCENTAGE] Scaling by ${percentage}%: ${dimensions.width}x${dimensions.height} → ${scaledWidth}x${scaledHeight}`
      // );
    } catch (error) {
      // console.warn('⚠️ Could not get image dimensions for percentage scaling, using fallback');
      if (options?.maxWidth !== undefined) baseOptions.maxWidth = options.maxWidth;
      if (options?.maxHeight !== undefined) baseOptions.maxHeight = options.maxHeight;
    }
  }

  // ============================================================================
  // COMMENTED OUT: DIMENSIONS and HYBRID modes (keeping only PERCENTAGE)
  // ============================================================================
  //
  // // HYBRID mode: enforce max dimensions as limits
  // if (mode === CompressionMode.HYBRID) {
  //   if (
  //     options?.maxWidth !== undefined &&
  //     (!baseOptions.maxWidth || baseOptions.maxWidth > options.maxWidth)
  //   ) {
  //     console.log(`📏 [HYBRID] Enforcing maxWidth limit: ${options.maxWidth}px`);
  //     baseOptions.maxWidth = options.maxWidth;
  //   }
  //   if (
  //     options?.maxHeight !== undefined &&
  //     (!baseOptions.maxHeight || baseOptions.maxHeight > options.maxHeight)
  //   ) {
  //     console.log(`📏 [HYBRID] Enforcing maxHeight limit: ${options.maxHeight}px`);
  //     baseOptions.maxHeight = options.maxHeight;
  //   }
  // }
  //
  // // DIMENSIONS mode: use fixed dimensions only
  // else if (mode === CompressionMode.DIMENSIONS) {
  //   console.log('📏 [DIMENSIONS] Using fixed dimension-based compression');
  //   if (options?.maxWidth !== undefined) baseOptions.maxWidth = options.maxWidth;
  //   if (options?.maxHeight !== undefined) baseOptions.maxHeight = options.maxHeight;
  // }

  // Add other optional properties
  if (options?.minWidth !== undefined) baseOptions.minWidth = options.minWidth;
  if (options?.minHeight !== undefined) baseOptions.minHeight = options.minHeight;
  if (options?.width !== undefined) baseOptions.width = options.width;
  if (options?.height !== undefined) baseOptions.height = options.height;
  if (options?.mimeType !== undefined) baseOptions.mimeType = options.mimeType;
  if (options?.convertTypes !== undefined) baseOptions.convertTypes = options.convertTypes;

  // For very large files, apply aggressive defaults if nothing specified
  if (isVeryLargeFile && !baseOptions.maxWidth && !baseOptions.maxHeight) {
    // console.log(
    //   `⚠️ Very large file detected (${fileSizeMB} MB). Applying aggressive compression (70%).`
    // );
    try {
      const dimensions = await getImageDimensions(file);
      baseOptions.maxWidth = Math.round(dimensions.width * 0.7);
      baseOptions.maxHeight = Math.round(dimensions.height * 0.7);
    } catch {
      baseOptions.maxWidth = 1600;
      baseOptions.maxHeight = 1600;
    }
    baseOptions.quality = Math.min(baseOptions.quality || 0.8, 0.7);
  }

  return baseOptions;
};

// -----------------------------------------------------------------------------
// Core Compression
// -----------------------------------------------------------------------------

export const compressImage = (file: File | Blob, options?: CompressImageOptions): Promise<File> =>
  new Promise((resolve) => {
    const validation = validateFile(file);
    if (!validation.valid) {
      const { fileName } = validation;
      resolve(toFile(file, fileName));
      return;
    }

    const { fileName, fileSizeMB } = validation;

    // Pre-validate that the file can be read as an image
    const validateImage = async (): Promise<boolean> => {
      try {
        await getImageDimensions(file);
        return true;
      } catch (error) {
        // console.warn(`⚠️ File cannot be loaded as image: ${fileName}`, error);
        return false;
      }
    };

    validateImage().then(async (isValid) => {
      if (!isValid) {
        // console.warn(`⚠️ Skipping compression for ${fileName}: File is not a valid image`);
        resolve(toFile(file, fileName));
        return;
      }

      const timeoutId = setTimeout(() => {
        // console.warn(`⚠️ Compression timeout for ${fileName}. Returning original file.`);
        resolve(toFile(file, fileName));
      }, 10000);

      try {
        const compressionOptions = await buildCompressionOptions(file, options, fileSizeMB);

        // eslint-disable-next-line no-new
        new Compressor(file, {
          ...compressionOptions,

          success(result) {
            clearTimeout(timeoutId);
            // Validate result before resolving
            if (result && result instanceof Blob) {
              // const originalSizeMB = (file.size / 1024 / 1024).toFixed(2);
              // const compressedSizeMB = (result.size / 1024 / 1024).toFixed(2);
              //  console.log(
              //   `✅ Compression successful: ${fileName} (${originalSizeMB} MB → ${compressedSizeMB} MB)`
              // );
              resolve(toFile(result, fileName));
            } else {
              // console.error(
              //   `⚠️ Invalid compression result for ${fileName}. Returning original file.`
              // );
              resolve(toFile(file, fileName));
            }
          },

          error(err) {
            clearTimeout(timeoutId);
            // console.error(`⚠️ Compression failed for ${fileName}:`, {
            // message: err?.message || String(err),
            //   fileSize: `${fileSizeMB} MB`,
            //   fileType: file.type,
            // });
            resolve(toFile(file, fileName));
          },
        });
      } catch (err: any) {
        clearTimeout(timeoutId);
        // console.error(`⚠️ Caught compressorjs internal error, preventing crash:`, {
        //   fileName,
        //   error: err?.message || String(err),
        //   stack: err?.stack,
        //   fileType: file.type,
        //   fileSize: `${fileSizeMB} MB`,
        // });
        resolve(toFile(file, fileName));
      }
    });
  });

export const compressImages = async (
  files: (File | Blob)[],
  options?: CompressImageOptions
): Promise<File[]> => Promise.all(files.map((f) => compressImage(f, options)));

export const compressImageIfNeeded = async (
  file: File | Blob,
  sizeThresholdInMB = 1,
  options?: CompressImageOptions
): Promise<File> => {
  if (!isImageFile(file)) return toFile(file);
  const sizeInMB = file.size / 1024 / 1024;
  return sizeInMB > sizeThresholdInMB ? compressImage(file, options) : toFile(file);
};

// -----------------------------------------------------------------------------
// Presets & Smart Compression
// -----------------------------------------------------------------------------

/**
 * Calculates optimal quality based on file size and image type
 * Following NestJS ImageOptimizer logic for intelligent quality adjustment
 */
const calculateOptimalQuality = (imageType: ImageType, fileSizeKB: number): number => {
  // Base quality according to image type priority
  let baseQuality: number;

  switch (imageType) {
    case ImageType.DOCUMENT:
      baseQuality = 90; // High quality for documents
      break;
    case ImageType.PHOTO:
      baseQuality = 85; // High quality for photos
      break;
    case ImageType.SIGNATURE:
      baseQuality = 92; // Very high quality for signatures
      break;
    default:
      baseQuality = 80; // Standard quality for other files
  }

  // Adjust quality for very large files to prevent excessive output sizes
  if (fileSizeKB > 5000) {
    baseQuality = Math.max(baseQuality - 10, 70);
  } else if (fileSizeKB > 2000) {
    baseQuality = Math.max(baseQuality - 5, 75);
  }

  return baseQuality / 100; // Convert to 0-1 range
};

export const getCompressionPreset = (imageType: ImageType): CompressImageOptions => {
  switch (imageType) {
    case ImageType.DOCUMENT:
      return {
        quality: 0.9, // High quality for documents (90%)
        scalePercentage: 85, // Documents: 85% scale (HIGHEST priority - minimal compression for clarity)
      };
    case ImageType.PHOTO:
      return {
        quality: 0.85, // High quality for photos (85%)
        scalePercentage: 95, // Photos: 95% scale (HIGH priority - good quality retention)
        checkOrientation: true,
      };
    case ImageType.SIGNATURE:
      return {
        quality: 0.92, // Very high quality for signatures (92%)
        scalePercentage: 97, // Signatures: 97% scale (MEDIUM priority - very minimal compression)
        convertTypes: [],
      };
    default:
      return {
        quality: 0.8, // Standard quality for other files (80%)
        scalePercentage: 90, // Other: 90% scale (LOW priority - balanced compression)
      };
  }
};

export const smartCompress = async (
  file: File | Blob,
  options?: SmartCompressOptions
): Promise<File> => {
  if (!isImageFile(file)) return toFile(file);

  const {
    sizeThresholdMB = 2,
    widthThresholdPx = 2000,
    imageType = ImageType.GENERAL,
    overrideOptions,
  } = options || {};

  const sizeInMB = file.size / 1024 / 1024;
  let exceedsDimensions = false;

  try {
    const { width } = await getImageDimensions(file);
    exceedsDimensions = width > widthThresholdPx;
  } catch {
    console.warn('⚠️ Could not read image dimensions, checking by size only');
  }

  if (sizeInMB <= sizeThresholdMB && !exceedsDimensions) return toFile(file);

  // Use intelligent quality calculation based on file size and image type
  const fileSizeKB = file.size / 1024;
  const intelligentQuality = calculateOptimalQuality(imageType, fileSizeKB);

  const preset = getCompressionPreset(imageType);
  const finalOptions = {
    ...preset,
    quality: intelligentQuality, // Override with intelligent quality
    ...overrideOptions,
  };
  return compressImage(file, finalOptions);
};

// -----------------------------------------------------------------------------
// Common Presets
// -----------------------------------------------------------------------------

export const CompressionPresets = {
  PHOTO: { sizeThresholdMB: 2, widthThresholdPx: 2000, imageType: ImageType.PHOTO },
  DOCUMENT: { sizeThresholdMB: 2, widthThresholdPx: 2000, imageType: ImageType.DOCUMENT },
  SIGNATURE: { sizeThresholdMB: 2, widthThresholdPx: 2000, imageType: ImageType.SIGNATURE },
  AVATAR: {
    sizeThresholdMB: 0.5,
    widthThresholdPx: 800,
    imageType: ImageType.PHOTO,
    overrideOptions: { quality: 0.85, scalePercentage: 95 }, // Images: 95%
  },
  BANNER: {
    sizeThresholdMB: 2,
    widthThresholdPx: 2500,
    imageType: ImageType.PHOTO,
    overrideOptions: { quality: 0.85, scalePercentage: 95 }, // Images: 95%
  },
} as const;
