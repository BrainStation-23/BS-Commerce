"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const { MULTER_FILE_DESTINATION, MULTER_FILE_SIZE, MULTER_FILE_EXTENSIONS } = process.env;
exports.multerConfig = {
    dest: MULTER_FILE_DESTINATION || 'src/public/assets',
    maxFileSize: Number(MULTER_FILE_SIZE) || 3 * 1024 * 1024,
    mimeTypes: MULTER_FILE_EXTENSIONS || ['image/png', 'image/jpeg', 'image/svg+xml', 'image/jpg', 'image/gif']
};
//# sourceMappingURL=index.js.map