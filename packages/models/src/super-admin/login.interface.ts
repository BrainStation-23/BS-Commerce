
export interface ISuperAdminLoginReq{
    email: string
    password: string
}

export interface ISuperAdminLoginRes{
    token: string
}

export interface ISuperAdminSignupReq{
    id?: string 
    firstName: string
    lastName: string
    email: string
    countryCode?: string
    phone?: string
    password: string
    isMfa?: boolean
    mfaType?: string[]
    accountType: string
}