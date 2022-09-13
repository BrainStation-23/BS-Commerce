export class SignInData {
  email?: string;
  phone?: string;
  password: string;
}

export class CustomerJwtPayload {
  id: string;
  email: string;
  phone: string;
  logInTime: number;
  role: string;
}
