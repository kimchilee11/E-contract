module.exports.CreateEmployeeDto = body => ({
    employeeEmail: body.email,
    employeeName: body.name,
    employeeAvartar: body.picture,
});

module.exports.CreateCompanyDto = body => ({
    companyEmail: body.email,
    companyName: body.name,
    companyAvartar: body.picture,
});
