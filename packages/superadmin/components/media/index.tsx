import type { NextComponentType } from 'next';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { userAPI } from '@/APIs';

const MediaComponent: NextComponentType = () => {
  const [url, setUrl] = useState<string>('');

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.files ? event.target.files[0] : null);
    const file: File | null = event.target.files ? event.target.files[0] : null;
    if (file !== null) {
      const formData = new FormData();
      formData.append('file', file);
      uploadMedia(formData);
    }
  };
  const uploadMedia = async (data: FormData) => {
    const response = await userAPI.mediaUpload(data);
    setUrl(response?.data.url!);
    toast.success('Uploaded file!', { autoClose: 1000 });

    //console.log(response?.data.url);
  };

  async function copyTextToClipboard(url: string) {
    if ('clipboard' in navigator) {
      toast.success('Copied!', {
        autoClose: 200,
        hideProgressBar: true,
        pauseOnHover: false,
      });
      return await navigator.clipboard.writeText(url);
    } else {
      return document.execCommand('copy', true, url);
    }
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Default file input example
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={handleFileInput}
        />
      </div>
      {url ? (
        <p className="position-relative">
          URL of uploaded media:
          <input type="text" className="form-control" value={url} disabled />
          <button
            className="btn position-absolute"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Copy to clipboard"
            style={{ right: '0px', padding: '0px', top: '0px' }}
            onClick={() => copyTextToClipboard(url)}
          >
            <i className="bi bi-clipboard-check" />
          </button>
        </p>
      ) : (
        ''
      )}
    </>
  );
};

export default MediaComponent;
