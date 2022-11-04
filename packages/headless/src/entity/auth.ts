export class SignInData {
  username: string;
  password: string;
}

export class AdminJwtPayload {
  id: string;
  username: string;
  logInTime: number;
  role: string;
  storeId?: string
}
