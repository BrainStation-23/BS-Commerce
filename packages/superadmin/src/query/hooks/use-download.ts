// src/query/hooks/use-download.ts
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { downloadFile } from 'src/utils/download';
import type { AxiosResponse } from 'axios';

export interface UseDownloadOptions<TVariables, TData = Blob | AxiosResponse<Blob>> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  getFilename: (variables: TVariables) => string;
  mimeType?: string;
  invalidateQueries?: string[][];
  mutationOptions?: Omit<UseMutationOptions<TData, Error, TVariables, unknown>, 'mutationFn'>;
}

export const useDownload = <TVariables, TData = Blob | AxiosResponse<Blob>>({
  mutationFn,
  getFilename,
  mimeType = 'application/octet-stream',
  invalidateQueries,
  mutationOptions,
}: UseDownloadOptions<TVariables, TData>) => 
  useMutation<TData, Error, TVariables>({
    mutationFn,
    ...mutationOptions,
    onSuccess: (data, variables, context) => {
      // Call the original onSuccess if provided
      mutationOptions?.onSuccess?.(data, variables, context);
      
      // Handle download
      // If response is AxiosResponse<Blob>, extract headers and blob
      let blobData: BlobPart = data as unknown as BlobPart;
      let filename = getFilename(variables);
      const maybeAxios = data as unknown as AxiosResponse<Blob>;

      if (maybeAxios && typeof maybeAxios === 'object' && 'data' in maybeAxios && 'headers' in maybeAxios) {
        blobData = (maybeAxios as AxiosResponse<Blob>).data as BlobPart;
        const contentDisposition = (maybeAxios as AxiosResponse<Blob>).headers?.['content-disposition'];
        if (contentDisposition) {
          const match = contentDisposition.match(/filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i);
          const extracted = decodeURIComponent(match?.[1] || match?.[2] || '');
          if (extracted) filename = extracted;
        }
      }

      downloadFile({
        data: blobData,
        filename,
        mimeType,
        invalidateQueries,
      });
    },
  });
