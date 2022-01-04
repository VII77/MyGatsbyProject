import React, { useState, useEffect } from "react"
import { useFirebase } from "../hooks/useFirebase"
import { navigate } from "gatsby"
import Button from "@material-ui/core/Button"
import { AuthContainer } from "../components/AuthContainer"
import { AuthCard } from "../components/AuthCard"
import { useLocation } from "@reach/router"
import { parse } from "query-string"
import { handleException } from "../utils/exceptionService"

const VerifyEmail = () => {
  const location = useLocation()
  const params = parse(location.search)
  const [working, setWorking] = useState(true)

  const props  = useFirebase()

  useEffect(() => {
    props.handleVerifyEmail(params.actionCode).then(
      () => setWorking(false),
      error => handleException(error)
    )
  }, [])

  return (
    <>
      {props.isFinished && (
        <AuthContainer>
          <AuthCard header="Verification successful!">
            <>
              <p>Your email address is verified.</p>
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate("/")}
                fullWidth
              >
                Return to home
              </Button>
            </>
          </AuthCard>
        </AuthContainer>
      )}
    </>
  )
}

export default VerifyEmail
