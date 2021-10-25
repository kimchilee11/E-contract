const router = require('express').Router();

const { EmployeeController } = require('./employee.controller');

router.post('/', EmployeeController.createOne);
router.get('/:id', EmployeeController.getOne);
router.put('/:id', EmployeeController.updateOne);

module.exports.EmployeeRouter = router;
