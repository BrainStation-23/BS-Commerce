export interface IStoreAdminLoginReq {
	email: string;
	password: string;
}

export interface IStoreAdminLoginRes {
	token: string;
}

export interface IRoleInfo {
	name: string;
	roleId: string;
	roleType: string;
}

export interface IStoreAdminSignupReq {
	id?: string;
	firstName: string;
	lastName: string;
	roleId?: string;
	branchId?: string[];
	email: string;
	countryCode?: string;
	phone?: string;
	password?: string;
}

export interface IStoreAdminSignupRes {
	id?: string;
	firstName: string;
	lastName: string;
	role: IRoleInfo;
	storeId: string;
	branchIds?: string[];
	email: string;
	countryCode?: string;
	phone?: string;
}