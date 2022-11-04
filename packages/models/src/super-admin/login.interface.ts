export interface ISuperAdminLoginReq {
	email: string;
	password: string;
}

export interface ISuperAdminLoginRes {
	token: string;
}

export interface ISuperAdminSignupReq {
	id?: string;
	firstName: string;
	lastName: string;
	role: string;
	storeId: string;
	branchId: string[];
	email: string;
	countryCode?: string;
	phone?: string;
	password?: string;
	isMfaEnabled?: boolean;
	mfaType?: string;
}
