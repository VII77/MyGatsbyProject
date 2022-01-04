import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { AuthContext } from "../context/auth"
import { useFirebase } from "../hooks/useFirebase"

const Test = ({ component: Component, location, ...rest }) => {
  const { checkRoleClaim } = useFirebase()
  const { user, setUser } = React.useContext(AuthContext)

  useEffect(async () => {
    const hasRole = await checkRoleClaim(user, "premium")

    if (hasRole) {
      navigate("/accessDenied")
      return null
    }
  }, [])

  return <Component {...rest} />
}

export default Test
