"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shoppingCartFactory_1 = __importDefault(require("./shoppingCartFactory"));
class User {
    constructor({ id, firstName, lastName, mobile, email, }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
    }
    getUserId() {
        return this.id;
    }
    getUserDetails() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            mobile: this.mobile,
        };
    }
    createUserCart() {
        return shoppingCartFactory_1.default.createInstance().createUserCart({
            userID: this.id,
        });
    }
}
exports.default = User;
