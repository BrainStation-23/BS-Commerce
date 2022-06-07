export interface accordionBody {
    id:string,
    title: string;
    body:string
  }

  export interface storiesBody {
    id:string,
    image: string;
    title: string;
    description:string
  }

  export interface CarouselBody {
    id:string;
    title: string;
    body:string;
    image: string;
  }

  export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    displayName?: string;
    phone?: string;
    username: string;
    email: string;
    password?: string;
    provider?: string;
    providerData?: object;
    additionalProviderData?: object;
    resetPasswordToken?: string;
    resetPasswordExpires?: number;
    gender?: string;
    addresses?: Address[];
    status: string;
  }

  export interface Address {
    id?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    country: string;
    postCode: string;
  }