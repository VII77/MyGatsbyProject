import React, { useEffect } from "react"
import * as admin from "firebase-admin"
import { AuthContext } from "../context/auth"

export const useFirebaseAuthorization = () => {
  useEffect(() => {
    admin.intializeApp()
  }, [])
  const { user, setUser } = React.useContext(AuthContext)

  async function grantRole(email, role) {
    if (user.customClaims && user.customClaims[role] === true) {
      return
    }
    return admin.auth.setCustomUserClaims(user.uid, { role: true })
  }

  return {
    ...grantRole,
  }
}
