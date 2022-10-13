export class StoreAddress {
  id?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postCode: string;
}

export class Store {
  id?: string;
  info: {
    shopName: string;
    description?: string;
    legalName?: string;
  };
  image?: {
    logo?: string;
    cover?: string;
  };
  address: StoreAddress;
  url: string;
  // store adminId
  admin?: string;
  isActive: boolean;
}
