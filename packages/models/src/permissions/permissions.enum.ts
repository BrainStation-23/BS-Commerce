export const enum PERMISSIONS {
	// common
	VIEW_OWN_PROFILE = "view-own-profile",

	// super admin -> manage admin
	CREATE_ADMIN = "create-admin",
	EDIT_ADMIN = "edit-admin",
	DELETE_ADMIN = "delete-admin",
	VIEW_ALL_ADMIN = "view-all-admin",
	VIEW_SINGLE_ADMIN = "view-single-admin",

	// super admin -> manage store
	CREATE_STORE = "create-store",
	EDIT_STORE = "edit-store",
	VIEW_ALL_STORE = "view-all-store",
	VIEW_SINGLE_STORE = "view-single-store",

	// super admin -> manage branch
	CREATE_BRANCH = "create-branch",
	EDIT_BRANCH = "edit-branch",
	DELETE_BRANCH = "delete-branch-admin",
	VIEW_ALL_BRANCH = "view-all-branch",
	VIEW_SINGLE_BRANCH = "view-single-branch",

	// super admin -> manage role
	CREATE_ROLE = "create-role",
	VIEW_ALL_ROLE = "view-all-role",
	VIEW_SINGLE_ROLE = "view-single-role",
	EDIT_ROLE = "edit-role",
	DELETE_ROLE = "delete-role",
	ASSIGN_ROLE = "assign-role",

	// user admin -> manage role
	CREATE_USER_ADMIN_ROLE = "create-user-admin-role",
	VIEW_USER_ADMIN_ALL_ROLE = "view-user-admin-all-role",
	VIEW_USER_ADMIN_SINGLE_ROLE = "view-user-admin-single-role",
	EDIT_USER_ADMIN_ROLE = "edit-user-admin-role",
	DELETE_USER_ADMIN_ROLE = "delete-user-admin-role",
	ASSIGN_USER_ADMIN_ROLE = "assign-user-admin-role",

	// super admin -> manage branch admin
	CREATE_USER_ADMIN = "create-user-admin",
	EDIT_USER_ADMIN = "edit-user-admin",
	DELETE_USER_ADMIN = "delete-user-admin",
	VIEW_ALL_USER_ADMIN = "view-all-user-admin",
	VIEW_SINGLE_USER_ADMIN = "view-single-user-admin",

	// mfa actions
	ADD_MFA = "add-mfa",
	VERIFY_OTP_AFTER_ADD_MFA = "verify-otp-after-add-mfa",

	// roles
	VIEW_OWN_ROLE = "view-own-role",

	// orders
	// products
	// store
	VIEW_OWN_STORE = "view-own-store",
	VIEW_STORE_ORDERS = "view-store-orders",

	// branch
	VIEW_OWN_BRANCH = "view-own-branch",
	VIEW_BRANCH_ORDERS = "view-branch-orders",
}

export enum RoleTypeEnum {
	SUPER_ADMIN = "super-admin-type",
	USER_ADMIN = "user-admin-type",
}
