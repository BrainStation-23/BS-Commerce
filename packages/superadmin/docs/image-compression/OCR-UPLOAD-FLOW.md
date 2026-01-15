# OCR Upload Flow - Compression Integration

## Overview

The OCR file upload component follows a strict **Input → Compress → OCR Processing** flow to optimize uploads and reduce file sizes before sending to the OCR service.

## Flow Diagram

```
User Selects File
       ↓
[1] Input File Received
       ↓
[2] Check if Image & Compression Enabled?
       ├─ Yes → Compress Image
       │         ├─ Success → Use Compressed File
       │         └─ Error → Use Original File
       └─ No → Use Original File
       ↓
[3] Validate File Size (Post-Compression)
       ↓
[4] Create Preview Blob URL
       ↓
[5] Upload to OCR Processing
       ↓
[6] Auto-Populate Form Fields (if mapping provided)
       ↓
Done
```

## Implementation in `rhf-ocr-file-upload.tsx`

### Step-by-Step Code Flow

```typescript
const handleFileUpload = useCallback(
  async (file: File, onChange: (value: string) => void) => {
    // Step 1: Input file received
    let processedFile = file;
    const originalSize = file.size;

    // Step 2: Compress if it's an image and compression is enabled
    if (enableCompression && isImageFile(file)) {
      console.log('📦 [OCR Upload] Compressing image before OCR processing...');

      try {
        processedFile = await compressImageIfNeeded(file, compressThresholdMB, {
          quality: compressionQuality,
          maxWidth,
          maxHeight,
        });

        // Log compression stats
        if (processedFile.size !== originalSize) {
          console.log(`✅ [OCR Upload] Image compressed: X% size reduction`);
        }
      } catch (compressionError) {
        console.error('❌ [OCR Upload] Compression failed, using original file:', compressionError);
        // Falls back to original file
      }
    }

    // Step 3: Validate file size after compression
    if (processedFile.size > maxSizeKB * 1024) {
      setUploadError(`File size must be less than ${maxSizeKB / 1024}MB`);
      return;
    }

    // Step 4: Create preview blob URL
    const newBlobUrl = URL.createObjectURL(processedFile);
    setBlobUrl(newBlobUrl);

    // Step 5: Upload to OCR with compressed/processed file
    console.log('📤 [OCR Upload] Sending file to OCR processing...');

    const response = await uploadOcrMutation.mutateAsync({
      payload: { type: documentType, file: processedFile }, // ← Uses compressed file
      queryParams: { isUploadFile, isNeedOcrResponse },
    });

    // Step 6: Auto-populate form fields
    autoPopulateFormFields(response);
  },
  [...dependencies]
);
```

## Key Points

### ✅ Correct Flow

1. **Input Received**: File is captured from user input
2. **Compression**: Image is compressed if:
   - `enableCompression` is true
   - File is an image type (`isImageFile()`)
   - File size exceeds threshold
3. **Validation**: File size is validated AFTER compression
4. **OCR Upload**: The **compressed/processed file** is sent to OCR
5. **Form Population**: OCR data auto-populates form fields

### 🎯 Benefits

- **Smaller Uploads**: Compressed images upload faster
- **Reduced Costs**: Smaller files = less storage/bandwidth
- **Better Performance**: Faster OCR processing with smaller files
- **Graceful Degradation**: Falls back to original if compression fails
- **User Experience**: Smaller uploads mean faster processing

### 🔍 Console Logging

The component provides detailed console logs at each step:

```
📥 [OCR Upload] Input file received: photo.jpg (3.45 MB)
📦 [OCR Upload] Compressing image before OCR processing...
✅ [OCR Upload] Image compressed: 64.3% size reduction (1.23 MB)
📤 [OCR Upload] Sending file to OCR processing...
✅ [OCR Upload] OCR processing completed
```

## Error Handling

### Compression Errors

If compression fails:

- ❌ Error logged to console
- ✅ Original file is used
- ⏯️ Processing continues normally
- 👤 User never sees the error

### Size Validation Errors

If file is too large after compression:

- ⚠️ User sees error message
- 🛑 Upload is stopped
- 📝 User can try again with smaller file

## Default Configuration

```typescript
enableCompression = true; // Enable compression by default
compressionQuality = 0.8; // 80% quality
maxWidth = 1920; // Max width 1920px
maxHeight = 1080; // Max height 1080px
compressThresholdMB = 1; // Only compress if > 1MB
```

## Testing the Flow

### Console Output Example

**Successful Compression:**

```
📥 [OCR Upload] Input file received: document.jpg (4.5 MB)
📦 [OCR Upload] Compressing image before OCR processing...
✅ [OCR Upload] Image compressed: 60% size reduction (1.8 MB)
📤 [OCR Upload] Sending file to OCR processing...
✅ [OCR Upload] OCR processing completed
```

**No Compression Needed (File too small):**

```
📥 [OCR Upload] Input file received: document.jpg (0.5 MB)
✅ [OCR Upload] Image within limits, no compression needed
📤 [OCR Upload] Sending file to OCR processing...
✅ [OCR Upload] OCR processing completed
```

**Non-Image File:**

```
📥 [OCR Upload] Input file received: document.pdf (2.1 MB)
⏭️ [OCR Upload] File is not an image, skipping compression
📤 [OCR Upload] Sending file to OCR processing...
✅ [OCR Upload] OCR processing completed
```

**Compression Error:**

```
📥 [OCR Upload] Input file received: document.jpg (3.2 MB)
📦 [OCR Upload] Compressing image before OCR processing...
❌ [OCR Upload] Compression failed, using original file: [error]
📤 [OCR Upload] Sending file to OCR processing...
✅ [OCR Upload] OCR processing completed
```

## Summary

✅ **Flow is correct**: Input → Compress → OCR Processing  
✅ **Error handling**: Falls back to original on compression failure  
✅ **User experience**: Seamless, no errors exposed to users  
✅ **Performance**: Smaller uploads = faster processing  
✅ **Logging**: Detailed console logs for debugging

The implementation correctly follows the **Input → Compress → OCR** flow with robust error handling and user-friendly operation.
