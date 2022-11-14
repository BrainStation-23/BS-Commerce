export interface ISuperAdminLoginReq {
	email: string;
	password: string;
}

export interface ISuperAdminLoginRes {
	token: string;
}

export interface ISuperAdminRoleInfo {
	name: string;
	roleId: string;
	roleType: string;
}
export interface ISuperAdminSignupReq {
	id?: string;
	firstName: string;
	lastName: string;
	roleId: string;
	branchIds?: string[];
	email: string;
	countryCode?: string;
	phone?: string;
	password?: string;
}

export interface ISuperAdminSignupRes {
	id?: string;
	firstName: string;
	lastName: string;
	role: ISuperAdminRoleInfo;
	storeId: string;
	branchIds?: string[];
	email: string;
	countryCode?: string;
	phone?: string;
}
