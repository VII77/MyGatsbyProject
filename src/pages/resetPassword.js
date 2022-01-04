import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Button from "@material-ui/core/Button"
import { navigate } from "gatsby"
import PasswordConfirm from "../components/passwordConfirm"
import Password from "../components/password"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { FormProvider } from "react-hook-form"
import { useFirebase } from "../hooks/useFirebase"
import { SubmitButton } from "../components/SubmitButton"
import { useLocation } from "@reach/router"
import { parse } from "query-string"
import { AuthContainer } from "../components/AuthContainer"
import { AuthCard } from "../components/AuthCard"
import CircularIndeterminate from "../components/CircularIndeterminate"
import { handleException } from "../utils/exceptionService"

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match!")
    .required("Required"),
})

const ResetPassword = () => {
  const location = useLocation()
  const params = parse(location.search)

  const { isFinished, handleResetPassword, resetPassword } = useFirebase()
  useEffect(() => {
    handleResetPassword(params.actionCode).then(() => setWorking(false), (error) => {
      handleException(error)
    })
  }, [])
  const [working, setWorking] = useState(true)
  const [success, setSuccess] = useState(false)

  const { ...methods } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data, e) => {
    resetPassword(data, params.actionCode).then(() => {
      setSuccess(true)
      setWorking(false)
    })
  }

  return (
    <>
      {!success && !working && (
        <AuthContainer>
          <AuthCard header="Reset Password">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Password />
                <PasswordConfirm />
                <div className="register-btn">
                  <SubmitButton title="submit" />
                </div>
              </form>
            </FormProvider>
          </AuthCard>
        </AuthContainer>
      )}
      {success && isFinished && (
        <AuthContainer>
          <AuthCard header="Password update successful">
            <div className="account-created">
              <p>Your password was renewed.</p>
            </div>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => navigate("/")}
            >
              Go to Home
            </Button>
          </AuthCard>
        </AuthContainer>
      )}
      {working && <CircularIndeterminate></CircularIndeterminate>}
    </>
  )
}

export default ResetPassword
