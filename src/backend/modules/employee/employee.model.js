module.exports = class UserModel {
    employeeId;

    employeeName;

    employeeEmail;

    employeePhone;

    employeeAddress;

    employeeBirthday;

    employeeIdNumber;

    createdAt;

    constructor({
        employeeName, employeeEmail, employeePhone, employeeAddress, employeeBirthday, employeeIdNumber, createdAt
    }) {
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this.employeePhone = employeePhone;
        this.employeeAddress = employeeAddress;
        this.employeeBirthday = employeeBirthday;
        this.employeeIdNumber = employeeIdNumber;
        this.createdAt = new Date();
    }

    toJSon() {
        return {
            employeeId: this.employeeId,
            employeeName: this.employeeName,
            employeeEmail: this.employeeEmail,
            employeePhone: this.employeePhone,
            employeeAddress: this.employeeAddress,
            employeeBirthday: this.employeeBirthday,
            employeeIdNumber: this.employeeIdNumber,
            createdAt: this.createdAt,
        };
    }
};
