import { Prisma } from "@prisma/client";
import { Course } from "./Course";
export declare const student_include: {
    courses: true;
    user: true;
};
export type StudentPrisma = Prisma.StudentGetPayload<{
    include: typeof student_include;
}>;
export declare class Student {
    courses: Course[];
    id: string;
    user_id: string;
    constructor(id: string, data?: StudentPrisma);
    load(data: StudentPrisma): void;
}
