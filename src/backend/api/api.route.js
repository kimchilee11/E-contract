const express = require('express');

const router = express.Router();
const { authRouter } = require('./auth/auth.router');
const { EmployeeRouter } = require('./employee/employee.router');
const { CompanyRouter } = require('./company/company.router');
const { contractdRouter } = require('./contract/contract.router');
const { ImagesRouter } = require('./images/image.router');

router.use('/auth', authRouter);
router.use('/companies', CompanyRouter);
router.use('/employee', EmployeeRouter);
router.use('/contract', contractdRouter);
router.use('/image', ImagesRouter);

module.exports.ApiRouter = router;
