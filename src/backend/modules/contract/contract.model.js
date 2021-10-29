module.exports = class ContractModel {
    contractName;

    contractCode;

    contractDescription;

    contractType;

    contractStatus;

    contractStartDate;

    contractEndDate;

    employeeId;

    employeeSignedAt;

    employeeSignature;

    companyId;

    companySignedAt;

    companySignature;

    createAt;

    contractFields;

    constructor(companyId, {
        contractName, contractDescription, contractType, contractStartDate, contractEndDate, employeeId, contractFields,
        employeeSignature = '', companySignature = ''
    }) {
        this.contractName = contractName;
        this.contractDescription = contractDescription;
        this.contractType = contractType;
        this.contractStartDate = contractStartDate;
        this.contractEndDate = contractEndDate;
        this.employeeId = employeeId;
        this.companyId = companyId;
        this.contractFields = contractFields;
        // this.employeeSignedAt = employeeSignedAt;
        // this.companySignedAt = '';
        this.employeeSignature = employeeSignature;
        this.companySignature = companySignature;
        this.contractStatus = 'PENDING';
        this.createAt = new Date();
        // this.contractCode = `HDLD-${}`;
    }

    toJSon() {
        return {
            contractName: this.contractName,
            contractCode: this.contractCode,
            contractDescription: this.contractDescription,
            contractType: this.contractType,
            contractStatus: this.contractStatus,
            contractStartDate: this.contractStartDate,
            contractEndDate: this.contractEndDate,
            employeeId: this.employeeId,
            employeeSignedAt: this.employeeSignedAt,
            employeeSignature: this.employeeSignature,
            companyId: this.companyId,
            companySignedAt: this.companySignedAt,
            companySignature: this.companySignature,
            contractFields: this.contractFields,
            createAt: this.createAt,
        };
    }
};
