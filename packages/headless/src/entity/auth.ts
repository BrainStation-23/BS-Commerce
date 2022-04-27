export class SignInData {
    username: string;
    password: string;
}
export interface JwtPayload {
    id: string;
    username: string;
    logInTime: number;
}