const { MULTER_FILE_DESTINATION, MULTER_FILE_SIZE,MULTER_FILE_EXTENSION } = process.env;
export const multerConfig = {
    dest: String(MULTER_FILE_DESTINATION!) || 'src/public/assets',
    maxFileSize: Number(MULTER_FILE_SIZE) || 3 * 1024 * 1024, // 3 MB
    fileExtensionRegex: String(MULTER_FILE_EXTENSION) || '/\/(jpg|jpeg|png|gif)$/'
}
