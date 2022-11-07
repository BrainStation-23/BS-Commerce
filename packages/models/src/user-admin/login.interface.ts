export interface IUserAdminLoginReq {
	email: string;
	password: string;
}

export interface IUserAdminLoginRes {
	token: string;
}

export interface IRoleInfo {
	name: string;
	roleId: string;
	roleType: string;
}

export interface IUserAdminSignupReq {
	id?: string;
	firstName: string;
	lastName: string;
	roleId: string;
	branchId: string[];
	email: string;
	countryCode?: string;
	phone?: string;
	password?: string;
}

export interface IUserAdminSignupRes {
	id?: string;
	firstName: string;
	lastName: string;
	role: IRoleInfo;
	storeId: string;
	branchId: string[];
	email: string;
	countryCode?: string;
	phone?: string;
}