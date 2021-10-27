module.exports = class ContractModel {
    userA;

    userB;

    ipfs;

    status;

    data;

    userAsignature;

    userBsignature;

    constructor({ data, userA, userB }) {
        this.data = data;
        this.userA = userA;
        this.userB = userB;
        this.status = 'pending';
        this.ipfs = '';
        this.userASignature = '';
        this.userBsignature = '';
    }

    toJSon() {
        return {
            data: this.data,
            userA: this.userA,
            userB: this.userB,
            status: this.status,
            ipfs: this.ipfs,
            userASignature: this.userASignature,
            userBSignature: this.userBSignature,
        };
    }
};
