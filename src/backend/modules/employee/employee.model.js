module.exports = class UserModel {
    name;

    phoneNumber;

    address;

    email;

    idCard;

    bankAccount;

    issuedOn;

    idNo;

    constructor({
        name, phoneNumber, address, email, idCard, bankAccount, issuedOn, idNo
    }) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
        this.idCard = idCard;
        this.bankAccount = bankAccount;
        this.issuedOn = issuedOn;
        this.idNo = idNo;
    }

    toJSon() {
        return {
            name: this.name,
            phoneNumber: this.phoneNumber,
            address: this.address,
            email: this.email,
            idCard: this.idCard,
            bankAccount: this.bankAccount,
            issuedOn: this.issuedOn,
            idNo: this.idNo,
        };
    }
};
