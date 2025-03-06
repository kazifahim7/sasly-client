export interface IUser {
    id: string;
    email: string;
    role: "user" | "admin";
    iat?: number;
    exp?: number;
}