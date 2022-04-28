export class SignInData {
    username: string;
    password: string;
}
export class JwtPayload {
    id: string;
    username: string;
    logInTime: number;
}