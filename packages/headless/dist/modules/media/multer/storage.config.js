"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const multer_1 = require("multer");
const fs_1 = require("fs");
const multer_2 = require("../../../config/multer");
exports.multerOptions = {
    limits: {
        fileSize: +multer_2.multerConfig.maxFileSize,
    },
    fileFilter: (req, file, cb) => {
        req.fileExtensionValidationError = false;
        if (multer_2.multerConfig.mimeTypes.includes(file.mimetype)) {
            cb(null, true, req.fileExtensionValidationError);
        }
        else {
            req.fileExtensionValidationError = true;
            return cb(null, false, req.fileExtensionValidationError);
        }
    },
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            try {
                const uploadPath = `${multer_2.multerConfig.dest}/${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
                if (!(0, fs_1.existsSync)(uploadPath)) {
                    (0, fs_1.mkdirSync)(uploadPath, { recursive: true });
                }
                cb(null, uploadPath);
            }
            catch (error) {
                console.log(error);
            }
        },
        filename: (req, file, cb) => {
            cb(null, `${file.originalname}`);
        },
    }),
};
//# sourceMappingURL=storage.config.js.map