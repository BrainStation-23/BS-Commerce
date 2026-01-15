# Image Compression Modes Guide

## Overview

The image compression system now supports **three flexible compression modes** to meet different use cases. The default mode uses percentage-based scaling, which is the most flexible and maintains aspect ratios naturally.

---

## Compression Modes

### 1. **PERCENTAGE Mode** (Default) ✅

Scales images by a percentage of their original dimensions.

**When to use:**

- You want images to maintain their aspect ratio
- You want consistent compression across different image sizes
- You want the most flexible and predictable behavior

**Example:**

```tsx
<OCRFileUpload
  name="nidImage"
  label="NID Image"
  documentType={DocumentType.NID}
  scalePercentage={80} // Scale to 80% of original size
  compressionQuality={0.8}
  compressionMode={CompressionMode.PERCENTAGE} // Default, can be omitted
/>
```

**How it works:**

- A 4000x3000px image with `scalePercentage={80}` becomes 3200x2400px
- A 1000x800px image with `scalePercentage={80}` becomes 800x640px

---

### 2. **DIMENSIONS Mode**

Uses fixed maximum dimensions (maxWidth/maxHeight).

**When to use:**

- You have strict size requirements
- You want images to fit within specific dimensions
- You need to enforce maximum sizes regardless of original proportions

**Example:**

```tsx
<OCRFileUpload
  name="profilePhoto"
  label="Profile Photo"
  documentType={DocumentType.PROFILE}
  maxWidth={1920}
  maxHeight={1080}
  compressionQuality={0.8}
  compressionMode={CompressionMode.DIMENSIONS}
/>
```

**How it works:**

- Images are resized to fit within maxWidth × maxHeight
- Aspect ratio is preserved
- Images smaller than limits are not upscaled

---

### 3. **HYBRID Mode**

Combines both approaches: scales by percentage first, then enforces max dimensions as limits.

**When to use:**

- You want percentage-based scaling with safety limits
- You want to ensure images never exceed certain dimensions
- Best of both worlds approach

**Example:**

```tsx
<OCRFileUpload
  name="documentScan"
  label="Document Scan"
  documentType={DocumentType.DOCUMENT}
  scalePercentage={90} // Scale to 90% first
  maxWidth={2048} // But never exceed 2048px width
  maxHeight={2048} // Or 2048px height
  compressionQuality={0.88}
  compressionMode={CompressionMode.HYBRID}
/>
```

**How it works:**

1. First, scales the image to 90% of original size
2. Then, if result exceeds 2048×2048, caps it to those dimensions
3. Provides both consistent scaling and safety limits

---

## Complete Example with All Options

```tsx
import { CompressionMode } from 'src/utils/compress-image';

<OCRFileUpload
  name="nidFront"
  label="NID Front Side"
  documentType={DocumentType.NID}
  // Compression settings
  enableCompression={true} // Enable compression (default: true)
  compressionMode={CompressionMode.PERCENTAGE} // Default mode
  scalePercentage={80} // Scale to 80% (default: 80)
  compressionQuality={0.8} // Quality 0-1 (default: 0.8)
  compressThresholdMB={1} // Only compress files >1MB (default: 1)
  // Optional dimension limits (for DIMENSIONS or HYBRID mode)
  maxWidth={1920}
  maxHeight={1080}
  // Form settings
  accept="image/*"
  isRequired={true}
  helperText="Please upload clear NID image"
/>;
```

---

## Default Behavior

If you don't specify any compression settings, the component uses:

```typescript
{
  enableCompression: true,
  compressionMode: CompressionMode.PERCENTAGE,  // Percentage mode
  scalePercentage: 80,                          // 80% of original
  compressionQuality: 0.8,                      // 80% quality
  compressThresholdMB: 1                        // Files > 1MB
}
```

---

## Mode Comparison

| Feature                | PERCENTAGE | DIMENSIONS | HYBRID |
| ---------------------- | ---------- | ---------- | ------ |
| Maintains aspect ratio | ✅         | ✅         | ✅     |
| Consistent scaling     | ✅         | ❌         | ✅     |
| Fixed size limits      | ❌         | ✅         | ✅     |
| Predictable results    | ✅         | ⚠️         | ✅     |
| Best for large files   | ✅         | ✅         | ✅     |
| Best for consistency   | ✅         | ❌         | ✅     |

---

## Special Cases

### Very Large Files (>5MB)

For files larger than 5MB, the system automatically applies more aggressive compression:

- Scales to max 70% (in PERCENTAGE mode)
- Reduces quality to max 0.7
- In OCR upload component, this is handled automatically

### Non-Image Files

- PDFs and other non-image files skip compression entirely
- Validation still applies based on `maxSizeKB`

---

## Usage Examples

### Avatar Upload (Small, Circular)

```tsx
<AWSFileUpload
  name="avatar"
  label="Profile Picture"
  featureName={FeatureName.PROFILE}
  scalePercentage={70} // More aggressive for avatars
  maxWidth={500} // Small final size
  maxHeight={500}
  compressionMode={CompressionMode.HYBRID}
  compressionQuality={0.8}
/>
```

### Document Scan (High Quality)

```tsx
<OCRFileUpload
  name="tradeLicense"
  label="Trade License"
  documentType={DocumentType.TRADE_LICENSE}
  scalePercentage={90} // Preserve more detail
  compressionQuality={0.88} // Higher quality
  compressionMode={CompressionMode.PERCENTAGE}
/>
```

### Banner Image (Fixed Dimensions)

```tsx
<FileUpload
  name="banner"
  label="Banner Image"
  maxWidth={1920}
  maxHeight={1080}
  compressionMode={CompressionMode.DIMENSIONS} // Strict dimensions
  compressionQuality={0.85}
/>
```

---

## Migration Guide

### Old Code (Fixed Dimensions)

```tsx
<OCRFileUpload maxWidth={1920} maxHeight={1080} />
```

### New Code (Equivalent with Percentage)

```tsx
<OCRFileUpload
  scalePercentage={80} // Default, maintains aspect ratio
  // compressionMode not needed, PERCENTAGE is default
/>
```

### New Code (Keep Old Behavior)

```tsx
<OCRFileUpload
  maxWidth={1920}
  maxHeight={1080}
  compressionMode={CompressionMode.DIMENSIONS} // Explicit dimensions mode
/>
```

---

## Best Practices

1. **Use PERCENTAGE mode by default** - Most flexible and predictable
2. **Use HYBRID mode for critical uploads** - Safety with flexibility
3. **Use DIMENSIONS mode only when needed** - Specific size requirements
4. **Adjust scalePercentage based on use case:**
   - Documents/Signatures: 85-90% (preserve clarity)
   - Photos: 75-80% (balance size/quality)
   - Avatars: 60-70% (aggressive compression)
5. **Set appropriate quality:**
   - Documents: 0.85-0.9
   - Photos: 0.75-0.8
   - General: 0.8

---

## Console Logging

The compression system logs useful information to the console:

```
📐 [PERCENTAGE] Scaling by 80%: 4000x3000 → 3200x2400
✅ Compression successful: image.jpg (6.21 MB → 0.89 MB)
✅ [OCR Upload] Image compressed: 85.7% size reduction
```

These logs are only visible to developers (not users) for debugging purposes.
