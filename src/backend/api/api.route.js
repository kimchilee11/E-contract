const express = require('express');

const router = express.Router();
const { authRouter } = require('./auth/auth.router');
const { EmployeeRouter } = require('./employee/employee.router');
const { EmployerRouter } = require('./employer/employer.router');
const { contractdRouter } = require('./contract/contract.router');

router.use('/auth', authRouter);
router.use('/employer', EmployerRouter);
router.use('/employee', EmployeeRouter);
router.use('/contract', contractdRouter);

module.exports.ApiRouter = router;
