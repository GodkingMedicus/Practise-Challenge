export interface TeamMember {
    userId: number;
    email: string;
    password: string;
    role: string;
    authorized: boolean;
}