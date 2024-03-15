import { Prisma } from "@prisma/client";
import { Socket } from "socket.io";
import { LoginForm } from "../types/user/login";
import { Course } from "./Course";
import { PaymentCard } from "./PaymentCard";
import { ImageUpload, WithoutFunctions } from "./helpers";
import { Creator, CreatorForm, Student } from "./index";
import { Role } from "./Role";
export declare const user_include: {
    courses: true;
    creator: {
        include: {
            categories: true;
            courses: true;
            favorited_by: true;
        };
    };
    student: {
        include: {
            user: true;
            courses: true;
        };
    };
    favorite_courses: true;
    favorite_creators: {
        include: {
            user: true;
            courses: true;
            categories: true;
            favorited_by: true;
        };
    };
    payment_cards: true;
    role: {
        include: {
            admin_permissions: true;
            general_permissions: true;
            profile_permissions: true;
        };
    };
};
export type UserPrisma = Prisma.UserGetPayload<{
    include: typeof user_include;
}>;
export type UserForm = Omit<WithoutFunctions<User>, "id" | "admin" | "favorite_creators" | "favorite_courses" | "payment_cards" | "creator" | "student" | "role" | "cover" | "image"> & {
    image: ImageUpload | null;
    cover: ImageUpload | null;
    student: boolean;
    creator: CreatorForm | null;
};
export declare class User {
    id: string;
    username: string;
    email: string;
    password: string;
    name: string;
    cpf: string;
    birth: string;
    phone: string;
    pronoun: string;
    uf: string;
    admin: boolean;
    instagram: string | null;
    tiktok: string | null;
    profession: string | null;
    image: string | null;
    cover: string | null;
    bio: string | null;
    google_id: string | null;
    google_token: string | null;
    favorite_creators: Creator[];
    favorite_courses: Course[];
    payment_cards: PaymentCard[];
    creator: Creator | null;
    student: Student | null;
    role: Role;
    constructor(id: string, user_prisma?: UserPrisma);
    init(): Promise<void>;
    static update(data: Partial<UserPrisma> & {
        id: string;
    }, socket: Socket): Promise<void>;
    static updateImage(data: {
        id: string;
        image: ImageUpload | null;
        cover: ImageUpload | null;
    }, socket: Socket): Promise<void>;
    static signup(socket: Socket, data: UserForm): Promise<void>;
    static list(socket: Socket): Promise<void>;
    static login(socket: Socket, data: LoginForm): Promise<void>;
    load(data: UserPrisma): void;
    update(data: Partial<UserPrisma>, socket?: Socket): Promise<void>;
    updateImage(data: {
        image: ImageUpload | null;
        cover: ImageUpload | null;
    }, socket?: Socket): Promise<void>;
}
