import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from "fs";
import { multerConfig } from "config/multer";

// Multer Options
export const multerOptions = {
    // File size limits
    limits: {
        fileSize: +multerConfig.maxSize,
    },
    // Check the mimetypes of the file
    fileFilter: (req: any, file: any, cb: any) => {
        req.fileExtensionValidationError = false;
        if (file.mimetype.match(multerConfig.fileExtensionRegex)) {
            cb(null, true, req.fileExtensionValidationError);
        } else {
            req.fileExtensionValidationError = true
            return cb(null, false, req.fileExtensionValidationError);
        }
    },
    // Storage
    storage: diskStorage({
        // Destination path details
        destination: (req: any, file: Express.Multer.File, cb: any) => {
            const uploadPath = `${multerConfig.dest}/${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
            // Create folder if doesn't exist
            if (!existsSync(uploadPath)) {
                mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
        },
        // File modification details
        filename: (req: any, file: Express.Multer.File, cb: any) => {
            cb(null, `${file.originalname}`);
        },
    }),
};