import React, { createContext, useState, useEffect } from "react"
import { useFirebase } from "../hooks/useFirebase"

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const { subscribeToAuthState } = useFirebase()

  useEffect(() => {
    const unregisterAuthObserver = subscribeToAuthState(setUser)
    return () => unregisterAuthObserver()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
