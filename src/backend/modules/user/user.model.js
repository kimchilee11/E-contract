module.exports = class UserModel {
    email;

    fullName;

    role;

    constructor({ email, fullName, role }) {
        this.email = email;
        this.fullName = fullName;
        this.role = role;
    }

    toJSon() {
        return {
            email: this.email,
            fullName: this.fullName,
            role: this.role,
        };
    }
};
