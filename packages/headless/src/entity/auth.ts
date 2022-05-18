export class SignInData {
    email: string;
    password: string;
}
export class JwtPayload {
    id: string;
    email: string;
    logInTime: number;
}