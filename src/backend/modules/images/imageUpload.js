const multer = require('multer');
const path = require('path');
const { HTTPException } = require('./errorHandler');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedExt = ['.jpg', '.jpeg', '.png'];
        if (!allowedExt.includes(path.extname(file.originalname))) return cb(new HTTPException(400, 'File type not allowed'));
        return cb(null, true);
    },
});

/**
 * 
 * @param {*} keyName : Request key name
 * @param {*} isMany : Is it a many upload request ?
 * @param {*} count : Maximum image
 * @returns 
 */
const uploadMulter = (keyName, isMany, count) => {
    let uploadHandler;
    if (isMany) {
        uploadHandler = upload.array(keyName, count);
    } else {
        uploadHandler = upload.single(keyName);
    }

    return (req, res, next) => {
        uploadHandler(req, res, err => {
            if (err instanceof multer.MulterError) {
                console.log(err.message);
                return next(new HTTPException(400, err.message));
            } if (err) {
                console.log(err);
                return next(err); // here
            }
            return next();
        });
    };
};

module.exports = {
    uploadMulter,
};
