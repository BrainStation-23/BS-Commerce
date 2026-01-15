import { useMutation } from '@tanstack/react-query';

interface UploadMediaParams {
  file: File;
  feature_name: string;
}

export const useUploadMedia = () =>
  useMutation({
    mutationFn: async (params: UploadMediaParams) => ({
      url: '',
      data: {
        url: '',
        key: '',
      },
    }),
  });
