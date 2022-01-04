import React, { useEffect } from "react"
import { useLocation } from "@reach/router"
import { parse } from "query-string"
import { navigate } from "gatsby"
import CircularIndeterminate from "../components/CircularIndeterminate"

const AuthAction = () => {
  const location = useLocation()
  const params = parse(location.search)

  useEffect(() => {
    let url = ""
    switch (params.mode) {
      case "resetPassword":
        // Display reset password handler and UI.
        url = `/resetPassword?mode=resetPassword&actionCode=${params.oobCode}`
        navigate(url)
        break
      case "verifyEmail":
        // Display email verification handler and UI.
        url = `/verifyEmail?mode=verifyEmail&actionCode=${params.oobCode}`
        navigate(url)
        break
      default:
    }
  }, [])

  return <CircularIndeterminate></CircularIndeterminate>
}

export default AuthAction
