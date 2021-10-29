const { MulterError } = require('multer');
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `${process.cwd()}\\src\\upload`);
        },
        filename: (req, file, cb) => {
            cb(null, `${file.fieldname}-${Date.now()} ${path.extname(file.originalname)}`);
        }
    }),
    fileFilter: (req, file, cb) => {
        const allowedExt = ['.jpg', '.jpeg', '.png'];
        if (!allowedExt.includes(path.extname(file.originalname))) {
            return cb(new MulterError('File type not allowed'));
        }
        return cb(null, true);
    }
});

const uploadMulter = keyName => {
    const uploadHandler = upload.single(keyName);

    return (req, res, next) => {
        uploadHandler(req, res, err => {
            if (err instanceof multer.MulterError) {
                console.log(err.message);
                return next(new Error(err.message));
            }
            if (err) {
                console.log(err);
            }
            return next(err);
        });
    };
};

module.exports = {
    uploadMulter,
};
