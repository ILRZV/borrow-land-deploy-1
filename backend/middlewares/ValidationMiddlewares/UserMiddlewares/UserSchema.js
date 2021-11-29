const Joi = require("joi");
const passwordRegExp = new RegExp("^[a-zA-Z0-9]{8,20}$");
const phoneRegExp = new RegExp("^[+]?[0-9]{7,14}$");

class UserSchema {
    constructor() {
        this.name = Joi.string().min(3).max(30);
        this.email = Joi.string().email();
        this.password = Joi.string().pattern(passwordRegExp);
        this.phone = Joi.string().min(7).max(25).pattern(phoneRegExp);
    }

    registration() {
        this.name = this.name.required();
        this.email = this.email.required();
        this.password = this.password.required();
        this.phone = this.phone.required();
        return this;
    }

    updateProfile() {
        delete this.password;
        return this;
    }

    login() {
        delete this.name;
        delete this.phone;
        this.email = this.email.required();
        this.password = this.password.required();
        return this;
    }

    newPassword() {
        delete this.name;
        delete this.phone;
        delete this.email;
        this.password = this.password.required();
        return this;
    }
}

module.exports = new UserSchema();
