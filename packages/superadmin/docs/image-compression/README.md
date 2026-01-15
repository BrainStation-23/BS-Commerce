# 🖼️ Image Compression Documentation

Complete guide for the image compression system used in the Shanta AML Back Office application.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Quick Start](#quick-start)
4. [API Reference](#api-reference)
5. [Usage Examples](#usage-examples)
6. [Compression Presets](#compression-presets)
7. [Integration with Forms](#integration-with-forms)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)

---

## Overview

### ✅ Key Features

- **Smart Compression**: Only compresses image files, skips all non-image files automatically
- **Intelligent Thresholds**: Checks both file size AND dimensions before compressing
- **Never Upscales**: Small images stay small, large images are reduced
- **Quality Presets**: Five optimized presets for different use cases (photos, documents, signatures, avatars, banners)
- **MIME Type Validation**: Secure file type checking
- **Parallel Processing**: Process multiple files simultaneously
- **Strict Mode**: Won't increase file size (returns original if compressed is larger)
- **Console Logging**: Detailed compression statistics for debugging

### 🔧 Technical Details

- **Library**: Compressor.js (industry standard, 5M+ downloads/month)
- **Quality Ranges**: 75-90% based on use case
- **Max Dimensions**: 500px to 2048px depending on content type
- **Thresholds**: 0.5MB to 2MB size thresholds
- **File Types**: JPEG, PNG, GIF, WebP, SVG, and other image formats

---

## Installation

### Required Dependency

```bash
yarn add compressorjs
```

### Type Definitions

The TypeScript types are already defined in the project:

```
src/utils/compress-image.ts
```

---

## Quick Start

### 1. Basic Usage (Recommended)

```typescript
import { smartCompress, CompressionPresets } from 'src/utils/compress-image';

// For documents (ID cards, bank statements)
const compressed = await smartCompress(file, CompressionPresets.DOCUMENT);

// For signatures
const compressed = await smartCompress(file, CompressionPresets.SIGNATURE);

// For photos
const compressed = await smartCompress(file, CompressionPresets.PHOTO);

// For avatars
const compressed = await smartCompress(file, CompressionPresets.AVATAR);

// For banners
const compressed = await smartCompress(file, CompressionPresets.BANNER);
```

### 2. Using in Form Components

```typescript
import { FileUploadWithCompression } from 'src/components/hook-form';

<FileUploadWithCompression
  name="document"
  label="Upload National ID"
  accept="image/*"
  enableCompression={true}
  compressionPreset="DOCUMENT"
/>
```

---

## API Reference

### Core Functions

#### `compressImage(file, options)`

Compresses an image file using Compressor.js. **Automatically skips non-image files.**

```typescript
const compressedFile = await compressImage(file, {
  quality: 0.8,
  maxWidth: 1920,
  maxHeight: 1080,
  strict: true, // Won't increase file size
});
```

**Parameters:**

- `file`: File or Blob to compress
- `options`: `CompressImageOptions` (see options below)

**Returns:** Promise<File> - Compressed file or original file if not an image

**Options:**

- `quality` (0-1): Compression quality (default: 0.8)
- `maxWidth`: Maximum width (default: Infinity)
- `maxHeight`: Maximum height (default: Infinity)
- `minWidth`: Minimum width (prevents over-compression)
- `minHeight`: Minimum height (prevents over-compression)
- `strict`: Return original if compressed is larger (default: true)
- `checkOrientation`: Auto-rotate based on EXIF (default: true)
- `convertTypes`: Convert PNG to JPG (use empty array to preserve transparency)

---

#### `compressImages(files, options)`

Compresses multiple image files in parallel. **Automatically skips non-image files.**

```typescript
const compressedFiles = await compressImages(files, {
  quality: 0.8,
  maxWidth: 1280,
});
```

**Parameters:**

- `files`: Array of File or Blob
- `options`: `CompressImageOptions`

**Returns:** Promise<File[]> - Array of compressed files (non-images returned unchanged)

---

#### `smartCompress(file, options)`

Smart compression with intelligent threshold checking. **Best for production use.**

```typescript
const compressed = await smartCompress(file, CompressionPresets.DOCUMENT);
```

**Features:**

- Checks both file size AND dimensions
- Only compresses if >2MB OR width >2000px (configurable)
- Never upscales images
- Returns original if within limits
- Automatically skips non-image files

**Parameters:**

- `file`: File or Blob to process
- `options`: `SmartCompressOptions`

**Returns:** Promise<File> - Compressed file or original

---

#### `compressImageIfNeeded(file, thresholdMB, options)`

Compresses an image only if it exceeds a size threshold.

```typescript
// Only compress if > 2MB
const compressed = await compressImageIfNeeded(file, 2, {
  quality: 0.85,
  maxWidth: 2048,
});
```

**Parameters:**

- `file`: File or Blob to process
- `thresholdMB`: Size threshold in MB (default: 1)
- `options`: `CompressImageOptions`

**Returns:** Promise<File> - Compressed or original file

---

#### `isImageFile(file)`

Checks if a file is an image based on MIME type.

```typescript
if (isImageFile(file)) {
  // Process image
}
```

**Returns:** boolean - True if file is an image type

---

## Usage Examples

### Example 1: Document Upload with Smart Compression

```typescript
import { smartCompress, CompressionPresets } from 'src/utils/compress-image';

const handleDocumentUpload = async (file: File) => {
  try {
    // Smart compression for documents (ID, bank statement, etc.)
    const compressed = await smartCompress(file, CompressionPresets.DOCUMENT);

    // Upload to backend
    const formData = new FormData();
    formData.append('document', compressed);
    await uploadDocument(formData);

    console.log('Upload successful!');
  } catch (error) {
    console.error('Compression or upload failed:', error);
  }
};
```

### Example 2: Signature Upload with Transparency

```typescript
import { smartCompress, CompressionPresets } from 'src/utils/compress-image';

const handleSignatureUpload = async (file: File) => {
  try {
    // Preserves PNG transparency, high quality for signature authenticity
    const compressed = await smartCompress(file, CompressionPresets.SIGNATURE);

    // Upload signature
    const formData = new FormData();
    formData.append('signature', compressed);
    await uploadSignature(formData);
  } catch (error) {
    console.error('Signature upload failed:', error);
  }
};
```

### Example 3: Multiple File Upload (Mixed Types)

```typescript
import { compressImages } from 'src/utils/compress-image';

const handleMultipleFiles = async (files: File[]) => {
  try {
    // Works with mixed file types (images + PDFs + docs)
    // Images will be compressed, others returned unchanged
    const processed = await compressImages(files, {
      quality: 0.8,
      maxWidth: 1920,
      maxHeight: 1080,
    });

    // Upload all files
    const formData = new FormData();
    processed.forEach((file, index) => {
      formData.append(`file_${index}`, file);
    });
    await uploadFiles(formData);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

### Example 4: Custom Compression Settings

```typescript
import { compressImage } from 'src/utils/compress-image';

const customCompress = async (file: File) => {
  const compressed = await compressImage(file, {
    quality: 0.85, // 85% quality
    maxWidth: 2048, // Max 2048px width
    maxHeight: 2048, // Max 2048px height
    minWidth: 1000, // Don't reduce below 1000px
    minHeight: 700, // Don't reduce below 700px
    strict: true, // Don't increase file size
    checkOrientation: true, // Auto-rotate
  });

  return compressed;
};
```

### Example 5: Size-Based Compression

```typescript
import { compressImageIfNeeded } from 'src/utils/compress-image';

const conditionalCompress = async (file: File) => {
  // Only compress if > 1MB
  const compressed = await compressImageIfNeeded(file, 1, {
    quality: 0.8,
    maxWidth: 1920,
  });

  return compressed;
};
```

---

## Compression Presets

### PHOTO

**Best for:** Photo galleries, user uploads, general images

```typescript
CompressionPresets.PHOTO;
```

**Settings:**

- Quality: 75% (Google PageSpeed recommended)
- Max dimensions: 1280x1280px
- Thresholds: >2MB OR width >2000px
- Min dimensions: None

**Result:** Balanced quality and file size reduction

---

### DOCUMENT

**Best for:** ID cards, certificates, bank statements, legal documents

```typescript
CompressionPresets.DOCUMENT;
```

**Settings:**

- Quality: 88% (preserves OCR readability)
- Max dimensions: 2048x2048px
- Min dimensions: 1000x700px (maintains text clarity)
- Thresholds: >2MB OR width >2000px

**Result:** High quality, text remains clear and OCR-ready

---

### SIGNATURE

**Best for:** Digital signatures, signature pads, legal signatures

```typescript
CompressionPresets.SIGNATURE;
```

**Settings:**

- Quality: 90% (preserves signature authenticity)
- Max dimensions: 1280x1280px
- Min dimensions: 600x400px (maintains signature detail)
- Preserves PNG transparency (no format conversion)
- Thresholds: >2MB OR width >2000px

**Result:** Maximum quality, preserves transparency

---

### AVATAR

**Best for:** Profile pictures, thumbnails, contact photos

```typescript
CompressionPresets.AVATAR;
```

**Settings:**

- Quality: 80%
- Max dimensions: 500x500px
- Thresholds: >0.5MB OR width >800px
- Min dimensions: None

**Result:** Small file size, optimized for avatars

---

### BANNER

**Best for:** Hero banners, promotional images, announcement cards

```typescript
CompressionPresets.BANNER;
```

**Settings:**

- Quality: 80%
- Max dimensions: 1920x1080px (Full HD)
- Thresholds: >2MB OR width >2500px
- Min dimensions: None

**Result:** Wide format optimized for banners

---

## Integration with Forms

### Using FileUploadWithCompression Component

```typescript
import { FileUploadWithCompression } from 'src/components/hook-form';

<FileUploadWithCompression
  name="nationalId"
  label="National ID"
  accept="image/*"
  enableCompression={true}
  compressionPreset="DOCUMENT"
  maxSizeKB={5120}
/>
```

### Available Presets in Component

The `FileUploadWithCompression` component accepts these presets:

- `PHOTO` - For photos
- `DOCUMENT` - For documents (ID, certificates)
- `SIGNATURE` - For signatures
- `AVATAR` - For avatars
- `BANNER` - For banners

### Component Usage in Existing Forms

All form components use compression:

```typescript
// In rhf-file-upload.tsx
if (enableCompression && isImageFile(file)) {
  processedFile = await compressImageIfNeeded(file, compressThresholdMB, {
    quality: compressionQuality,
    maxWidth,
    maxHeight,
  });
}

// In rhf-ocr-file-upload.tsx
if (enableCompression && isImageFile(file)) {
  processedFile = await compressImageIfNeeded(file, compressThresholdMB, {
    quality: compressionQuality,
    maxWidth,
    maxHeight,
  });
}

// In rhf-aws-file-upload.tsx
if (enableCompression && isImageFile(file)) {
  processedFile = await compressImageIfNeeded(file, compressThresholdMB, {
    quality: compressionQuality,
    maxWidth,
    maxHeight,
  });
}
```

---

## Best Practices

### 1. ✅ Use Smart Compression for Production

```typescript
// ✅ Good: Uses intelligent thresholds
const compressed = await smartCompress(file, CompressionPresets.DOCUMENT);

// ❌ Avoid: Manual compression without intelligence
const compressed = await compressImage(file, { quality: 0.8 });
```

### 2. ✅ Choose the Right Preset

- Documents → `CompressionPresets.DOCUMENT`
- Signatures → `CompressionPresets.SIGNATURE`
- Photos → `CompressionPresets.PHOTO`
- Avatars → `CompressionPresets.AVATAR`
- Banners → `CompressionPresets.BANNER`

### 3. ✅ Let It Handle Mixed Files

```typescript
// ✅ Good: Handles all file types automatically
const processed = await compressImages(files, CompressionPresets.PHOTO);

// ❌ Avoid: Manual filtering
const imageFiles = files.filter((f) => f.type.startsWith('image/'));
```

### 4. ✅ Trust the Defaults

The presets are optimized based on industry standards. Don't over-customize:

```typescript
// ✅ Good: Use presets
await smartCompress(file, CompressionPresets.DOCUMENT);

// ❌ Avoid: Too much customization
await smartCompress(file, {
  imageType: ImageType.DOCUMENT,
  sizeThresholdMB: 1.5,
  widthThresholdPx: 1800,
  overrideOptions: { quality: 0.86, maxWidth: 1950 },
});
```

### 5. ✅ Handle Errors Gracefully

```typescript
try {
  const compressed = await smartCompress(file, CompressionPresets.DOCUMENT);
  // Upload compressed file
} catch (error) {
  console.error('Compression failed:', error);
  // Fallback to original file
}
```

---

## Troubleshooting

### Issue: Compression Skipped for Image Files

**Symptom:** Console shows "⏭️ [Compression Skipped] - Not an image file"

**Cause:** File type not recognized as image

**Solution:**

```typescript
// Check MIME type
console.log(file.type); // Should start with "image/"

// Ensure correct accept attribute in file input
<input type="file" accept="image/*" />
```

---

### Issue: File Size Not Reducing

**Symptom:** Compressed file is same size or larger

**Cause:** Image is already optimized or smaller than threshold

**Solution:**

```typescript
// Use strict mode (already default)
const compressed = await compressImage(file, {
  strict: true, // Returns original if compressed is larger
});

// Check thresholds
await smartCompress(file, {
  sizeThresholdMB: 1, // Lower threshold
  widthThresholdPx: 1500, // Lower dimension threshold
});
```

---

### Issue: Image Quality Too Low

**Symptom:** Compressed images look pixelated

**Solution:**

```typescript
// Increase quality
const compressed = await compressImage(file, {
  quality: 0.9, // Higher quality (default is 0.8)
});

// Or use DOCUMENT preset for higher quality
const compressed = await smartCompress(file, CompressionPresets.DOCUMENT);
```

---

### Issue: PNG Transparency Lost

**Symptom:** Transparent backgrounds become white

**Solution:**

```typescript
// Use SIGNATURE preset (preserves transparency)
const compressed = await smartCompress(file, CompressionPresets.SIGNATURE);

// Or disable format conversion
const compressed = await compressImage(file, {
  convertTypes: [], // Preserves PNG transparency
});
```

---

### Issue: Small Images Being Compressed

**Symptom:** Small avatars being compressed unnecessarily

**Solution:**

```typescript
// Increase thresholds
await smartCompress(file, {
  sizeThresholdMB: 2, // Only if >2MB
  widthThresholdPx: 2000, // Only if >2000px
});

// Or use AVATAR preset
await smartCompress(file, CompressionPresets.AVATAR);
```

---

## Console Logging

The compression functions provide detailed console logs for debugging:

### Compression Start

```
🔵 [Compression Start] {
  file: "photo.jpg",
  originalSize: "3.45 MB",
  type: "image/jpeg",
  options: {
    quality: 0.75,
    maxWidth: "unlimited",
    maxHeight: "unlimited"
  }
}
```

### Compression Skipped

```
⏭️ [Compression Skipped] {
  file: "document.pdf",
  reason: "Not an image file",
  type: "application/pdf"
}
```

### Compression Success

```
✅ [Compression Success] {
  file: "photo.jpg",
  before: "3.45 MB",
  after: "1.23 MB",
  reduction: "64.3%",
  ratio: "2.80x smaller",
  saved: "2.22 MB"
}
```

### Compression Failed

```
❌ [Compression Failed] {
  file: "photo.jpg",
  error: "Failed to load image"
}
```

---

## File Structure

```
src/
├── utils/
│   └── compress-image.ts          # Main compression utility
├── components/
│   └── hook-form/
│       ├── rhf-file-upload.tsx              # Uses compression
│       ├── rhf-ocr-file-upload.tsx           # Uses compression
│       ├── rhf-aws-file-upload.tsx           # Uses compression
│       └── rhf-file-upload-with-compression.tsx
```

---

## Summary

### ✅ What You Get

- **Smart Compression**: Intelligent threshold checking (size AND dimensions)
- **Image-Only Processing**: Automatically skips non-image files
- **Quality Presets**: 5 optimized presets for different use cases
- **Never Upscales**: Small images stay small
- **Transparency Support**: Preserves PNG transparency
- **OCR-Ready**: High quality for document scanning
- **Parallel Processing**: Handles multiple files efficiently
- **Strict Mode**: Won't increase file size
- **Detailed Logging**: Console output for debugging

### 🎯 Quick Reference

```typescript
// Install
yarn add compressorjs

// Import
import { smartCompress, CompressionPresets } from 'src/utils/compress-image';

// Use
const compressed = await smartCompress(file, CompressionPresets.DOCUMENT);
```

### 📚 Additional Resources

- Main utility: `src/utils/compress-image.ts`
- Form components: `src/components/hook-form/`
- Complete API docs in file comments

---

**Last Updated:** 2025-01-27  
**Version:** 2.0.0 (Smart Compression)
