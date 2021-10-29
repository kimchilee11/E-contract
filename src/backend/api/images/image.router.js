const router = require('express').Router();
const { uploadMulter } = require('../../modules/images/imageUpload');
const { imageController } = require('./image.controller');

router.post('/signatureA', uploadMulter('signature', false), imageController.createOneSignatureA);
router.post('/signatureB', uploadMulter('signature', false), imageController.createOneSignatureB);

module.exports.ImagesRouter = router;
