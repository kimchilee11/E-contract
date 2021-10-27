const router = require('express').Router();

const { EmployerController } = require('./employer.controller');

router.post('/', EmployerController.createOne);
// router.get('/:id', EmployerController.getOne);
router.put('/:id', EmployerController.updateOne);

module.exports.EmployerRouter = router;
