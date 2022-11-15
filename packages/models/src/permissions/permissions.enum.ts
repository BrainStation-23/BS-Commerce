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

	// store admin -> manage role
	CREATE_STORE_ADMIN_ROLE = "create-store-admin-role",
	VIEW_STORE_ADMIN_ALL_ROLE = "view-store-admin-all-role",
	VIEW_STORE_ADMIN_SINGLE_ROLE = "view-store-admin-single-role",
	EDIT_STORE_ADMIN_ROLE = "edit-store-admin-role",
	DELETE_STORE_ADMIN_ROLE = "delete-store-admin-role",
	ASSIGN_STORE_ADMIN_ROLE = "assign-store-admin-role",

	// super admin -> manage branch admin
	CREATE_STORE_ADMIN = "create-store-admin",
	EDIT_STORE_ADMIN = "edit-store-admin",
	DELETE_STORE_ADMIN = "delete-store-admin",
	VIEW_ALL_STORE_ADMIN = "view-all-store-admin",
	VIEW_SINGLE_STORE_ADMIN = "view-single-store-admin",

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

export const enum RoleTypeEnum {
	SUPER_ADMIN = "super-admin-type",
	STORE_ADMIN = "store-admin-type",
	BRANCH_ADMIN = "branch-admin-type",
}
