import { Prisma } from "@prisma/client";
import { category as include } from "../prisma/include";
import { Creator, CreatorPrisma } from "./Creator";
export type CategoryPrisma = Prisma.CategoryGetPayload<{
    include: typeof include;
}>;
export declare class Category {
    id: string;
    name: string;
    cover: string;
    creators: Creator[];
    constructor(data: CategoryPrisma);
    load(data: CategoryPrisma, creators: CreatorPrisma[]): void;
}
