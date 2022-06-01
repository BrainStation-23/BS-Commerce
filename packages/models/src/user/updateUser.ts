import { Address } from "./address";

export interface UpdatedUser {
    firstName?: string;
    lastName?: string;
    provider?: string;
    providerData?: object;
    additionalProviderData?: object;
    phone?: string;
    address?: Address;
    active?: boolean;
    gender?: string;
    status?: string;
}
