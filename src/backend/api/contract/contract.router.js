const router = require('express').Router();
const { ContractController } = require('./contract.controller');

router.post('/upload', ContractController.upload);
router.post('/decode', ContractController.decode);
router.post('/', ContractController.createOne);

module.exports.contractdRouter = router;
