import { useMutation } from '@tanstack/react-query';
import { OCRResponse } from 'src/types/ocr-attachments';

interface UploadOcrParams {
  payload: {
    type: string;
    file: File;
  };
  queryParams: {
    isUploadFile: boolean;
    isNeedOcrResponse: boolean;
  };
}

export const useUploadOcrAttachment = () =>
  useMutation<OCRResponse, Error, UploadOcrParams>({
    mutationFn: async (params: UploadOcrParams) => ({
      data: {},
      details: {
        data: {},
      },
      key: '',
    }),
  });
