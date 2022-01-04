import { navigate } from "gatsby"
import { check } from "prettier"
import React, { useState, useEffect } from "react"
import { AuthContext } from "../context/auth"
import { useFirebase } from "../hooks/useFirebase"

const PremiumRoute = ({ component: Component, location, ...rest }) => {
  const { user } = React.useContext(AuthContext)
  const { checkRole } = useFirebase()
  const [working, setWorking] = useState(true)

  useEffect(async () => {
    checkRole(user, "premium").then(value => {
      if (!value) {
        navigate("/accessDenied")
        return
      }
      setWorking(false)
    })
  }, [])

  return (
    <>
      {!working && <Component {...rest} />}
      {working && <p>Loading ....</p>}
    </>
  )
}

export default PremiumRoute
