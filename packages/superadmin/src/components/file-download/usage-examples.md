# Usage Examples

## Basic FileDownload Component

```tsx
import { FileDownload } from 'src/components/file-download';

// Simple download button
<FileDownload onDownload={handleDownload}>
  Download File
</FileDownload>

// With loading state
<FileDownload
  onDownload={handleDownload}
  isLoading={isDownloading}
>
  Downloading...
</FileDownload>

// With custom styling
<FileDownload
  onDownload={handleDownload}
  variant="contained"
  color="primary"
  size="large"
  tooltip="Click to download the file"
>
  Get File
</FileDownload>
```

## MoneyReceiptDownload Component

```tsx
import { MoneyReceiptDownload } from 'src/components/file-download';

// Basic money receipt download
<MoneyReceiptDownload depositId="deposit-123">
  Download Receipt
</MoneyReceiptDownload>

// With custom styling
<MoneyReceiptDownload
  depositId="deposit-456"
  variant="outlined"
  color="success"
  size="small"
  tooltip="Download money receipt for this deposit"
>
  Get Receipt
</MoneyReceiptDownload>
```

## Custom Download Handler

```tsx
import { FileDownload } from 'src/components/file-download';

const CustomDownloadComponent = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Your custom download logic here
      const response = await fetch('/api/files/download');
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'filename.ext';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <FileDownload
      onDownload={handleDownload}
      isLoading={isDownloading}
      variant="contained"
      color="primary"
    >
      Download Custom File
    </FileDownload>
  );
};
```

## Integration with Forms

```tsx
import { MoneyReceiptDownload } from 'src/components/file-download';

const DepositForm = () => {
  const [selectedDepositId, setSelectedDepositId] = useState('');

  return (
    <form>
      {/* Other form fields */}

      {selectedDepositId && (
        <MoneyReceiptDownload depositId={selectedDepositId} variant="outlined" color="info">
          Download Money Receipt
        </MoneyReceiptDownload>
      )}
    </form>
  );
};
```
