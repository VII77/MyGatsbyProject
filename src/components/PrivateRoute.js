import React from "react"
import { navigate } from "gatsby"
import { AuthContext } from "../context/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = React.useContext(AuthContext)

  if (!user) {
    navigate("/login")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute