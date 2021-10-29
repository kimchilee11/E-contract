const router = require('express').Router();
const { ContractController } = require('./contract.controller');

router.post('/', ContractController.createOne);
router.put('/:id', ContractController.updateOne);
// router.post('/', ContractController.createOne);

module.exports.contractdRouter = router;
