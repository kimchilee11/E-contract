const router = require('express').Router();

const { CompanyController } = require('./company.controller');

router.put('/:id', CompanyController.updateOne);

module.exports.CompanyRouter = router;
