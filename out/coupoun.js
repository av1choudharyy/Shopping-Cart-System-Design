"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoupounNextType = exports.CoupounNext = exports.CoupounAll = void 0;
class CoupounAll {
    constructor({ id, name, percentageDiscount, }) {
        this.id = id;
        this.name = name;
        this.percentageDiscount = percentageDiscount;
    }
    static createInstance() {
        if (!CoupounAll.instance) {
            CoupounAll.instance = new CoupounAll({
                id: 0,
                name: "CoupounAll",
                percentageDiscount: 10,
            });
        }
        return CoupounAll.instance;
    }
}
exports.CoupounAll = CoupounAll;
class CoupounNext {
    constructor({ id, name, percentageDiscount, }) {
        this.id = id;
        this.name = name;
        this.percentageDiscount = percentageDiscount;
    }
    static createInstance() {
        if (!CoupounNext.instance) {
            CoupounNext.instance = new CoupounNext({
                id: 1,
                name: "CoupounNext",
                percentageDiscount: 15,
            });
        }
        return CoupounNext.instance;
    }
}
exports.CoupounNext = CoupounNext;
class CoupounNextType {
    constructor({ id, name, percentageDiscount, }) {
        this.id = id;
        this.name = name;
        this.percentageDiscount = percentageDiscount;
        this.type = "card";
    }
    static createInstance() {
        if (!CoupounNextType.instance) {
            CoupounNextType.instance = new CoupounNextType({
                id: 2,
                name: "CoupounNextType",
                percentageDiscount: 5,
            });
        }
        return CoupounNextType.instance;
    }
}
exports.CoupounNextType = CoupounNextType;
