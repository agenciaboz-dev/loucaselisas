import { Prisma } from "@prisma/client";
export type PaymentCardPrisma = Prisma.PaymentcardGetPayload<{}>;
export declare class PaymentCard {
    id: string;
    number: string;
    owner: string;
    validity: string;
    cvc: string;
    type: string;
    constructor(data: PaymentCardPrisma);
}
