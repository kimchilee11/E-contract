const router = require('express').Router();

const { EmployeeController } = require('./employee.controller');

router.put('/:id', EmployeeController.createOne);
router.get('/:id', EmployeeController.getOne);

module.exports.EmployeeRouter = router;
