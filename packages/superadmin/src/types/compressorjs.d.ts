declare module 'compressorjs' {
  export interface CompressorOptions {
    /**
     * Indicate whether to output the original image instead of the compressed one when the size of the compressed image is greater than the original one's
     * @default true
     */
    strict?: boolean;

    /**
     * Indicate whether to read the image's Exif Orientation information,
     * and then rotate or flip the image automatically.
     * @default true
     */
    checkOrientation?: boolean;

    /**
     * The max width of the output image.
     * @default Infinity
     */
    maxWidth?: number;

    /**
     * The max height of the output image.
     * @default Infinity
     */
    maxHeight?: number;

    /**
     * The min width of the output image.
     * @default 0
     */
    minWidth?: number;

    /**
     * The min height of the output image.
     * @default 0
     */
    minHeight?: number;

    /**
     * The width of the output image.
     * If not specified, the natural width of the original image will be used.
     */
    width?: number;

    /**
     * The height of the output image.
     * If not specified, the natural height of the original image will be used.
     */
    height?: number;

    /**
     * Sets how the size of the image should be resized to the container
     * specified by the width and height options.
     * @default 'none'
     */
    resize?: 'none' | 'contain' | 'cover';

    /**
     * The quality of the output image.
     * It must be a number between 0 and 1.
     * @default 0.8
     */
    quality?: number;

    /**
     * The mime type of the output image.
     * By default, it is the same as the source image.
     * @default 'auto'
     */
    mimeType?: string;

    /**
     * PNG files over this value will be converted to JPEGs.
     * To disable this, just set the value to Infinity.
     * @default 5000000
     */
    convertSize?: number;

    /**
     * The mime type of the converted image.
     * @default 'image/jpeg'
     */
    convertTypes?: string | string[];

    /**
     * Files whose file type is included in this list,
     * and whose file size exceeds the convertSize value will be converted to JPEGs.
     * @default ['image/png']
     */

    /**
     * The hook function to call when the compression is successful.
     */
    success?: (result: Blob) => void;

    /**
     * The hook function to call when the compression fails.
     */
    error?: (error: Error) => void;

    /**
     * The hook function to call when the compression starts.
     */
    start?: (file: File) => void;

    /**
     * The hook function to call when the compression progress changes.
     */
    progress?: (event: ProgressEvent) => void;

    /**
     * The hook function to call when the compression is aborted.
     */
    abort?: () => void;

    /**
     * Transform the final Blob into another type if needed.
     * @default null
     */
    drew?: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;

    /**
     * The before draw hook function.
     */
    beforeDraw?: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
  }

  export default class Compressor {
    constructor(file: File | Blob, options?: CompressorOptions);

    /**
     * Aborts the compression process.
     */
    abort(): void;
  }
}

