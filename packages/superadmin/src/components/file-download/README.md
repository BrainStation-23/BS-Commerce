# File Download Components

This folder contains reusable components for downloading files, specifically designed to handle both images and PDFs.

## Components

### FileDownload

A generic, reusable download button component that can be used for any file download functionality.

**Props:**

- `onDownload`: Function to call when download is triggered
- `isLoading`: Boolean to show loading state
- `disabled`: Boolean to disable the button
- `tooltip`: Optional tooltip text
- `children`: Custom button text (defaults to "Download")
- All other Material-UI Button props are supported

**Usage:**

```tsx
import { FileDownload } from 'src/components/file-download';

<FileDownload
  onDownload={handleDownload}
  isLoading={isDownloading}
  variant="contained"
  color="primary"
>
  Download File
</FileDownload>;
```

### MoneyReceiptDownload

A specialized component for downloading money receipts from deposits. Uses the `useDownloadMoneyReceipt` hook internally.

**Props:**

- `depositId`: The ID of the deposit to download the money receipt for
- `children`: Custom button text (defaults to "Download Money Receipt")
- All other FileDownload props are supported

**Usage:**

```tsx
import { MoneyReceiptDownload } from 'src/components/file-download';

<MoneyReceiptDownload depositId="deposit-id-here" variant="outlined" size="small">
  Get Receipt
</MoneyReceiptDownload>;
```

## Features

- **Universal File Support**: Handles both images and PDFs automatically
- **Loading States**: Shows loading spinner during download
- **Error Handling**: Built-in error handling through React Query
- **Material Icons**: Uses Material-UI icons as requested
- **TypeScript Support**: Full TypeScript support with proper typing
- **Reusable**: Can be easily extended for other file types

## API Integration

The components integrate with the deposit API endpoints:

- **Endpoint**: `/api/admin/ied/deposits/{id}/money-receipt`
- **Method**: GET
- **Response**: Blob data with proper content-type headers
- **Automatic Download**: Files are automatically downloaded when the API call succeeds
