module.exports.CreateUserDto = body => ({
    email: body.email,
    fullName: body.name,
    role: 1// 1: employee
});
