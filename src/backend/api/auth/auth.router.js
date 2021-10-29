const router = require('express').Router();

const { AuthController } = require('./auth.controller');
// const { AuthInterceptor } = require('../../modules/auth/interceptor');

router.post('/employee/login', AuthController.employeeSignIn);
router.post('/company/login', AuthController.companySignIn);

module.exports.authRouter = router;
