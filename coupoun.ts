export interface ICoupoun {
    id: number;
    name: string;
    percentageDiscount: number;
    type?: string;
}

export class CoupounAll implements ICoupoun {
    id: number;
    name: string;
    percentageDiscount: number;

    private static instance: CoupounAll;
    private constructor({
        id,
        name,
        percentageDiscount,
    }: {
        id: number;
        name: string;
        percentageDiscount: number;
    }) {
        this.id = id;
        this.name = name;
        this.percentageDiscount = percentageDiscount;
    }

    public static createInstance() {
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

export class CoupounNext implements ICoupoun {
    id: number;
    name: string;
    percentageDiscount: number;

    private static instance: CoupounNext;
    private constructor({
        id,
        name,
        percentageDiscount,
    }: {
        id: number;
        name: string;
        percentageDiscount: number;
    }) {
        this.id = id;
        this.name = name;
        this.percentageDiscount = percentageDiscount;
    }

    public static createInstance() {
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

export class CoupounNextType implements ICoupoun {
    id: number;
    name: string;
    percentageDiscount: number;
    type: string;

    private static instance: CoupounNextType;
    private constructor({
        id,
        name,
        percentageDiscount,
    }: {
        id: number;
        name: string;
        percentageDiscount: number;
    }) {
        this.id = id;
        this.name = name;
        this.percentageDiscount = percentageDiscount;
        this.type = "card";
    }

    public static createInstance() {
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
