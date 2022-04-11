import { createContext, useContext, useState } from 'react'
import { Dispatch, SetStateAction } from 'React'

interface AuthData {
    isLoggedIn: boolean
    user: string

}

const AuthContext = createContext(undefined as any)

// at this point i cant define the proper type for this children, so later I will figure it out
export function AuthProvider({ children } : {children : any}) {
  const [authData, setAuthData] = useState<AuthData>({
    isLoggedIn: false,
    user: '',
  })
  console.log("Context Injected")
  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error('useAuth must be used inside a `AuthProvider`')

  return context
}