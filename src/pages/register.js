import React, { useState } from "react"
import { AuthContext } from "../context/auth"
import { useForm } from "react-hook-form"
import { Button } from "@material-ui/core"
import { navigate } from "gatsby"
import PasswordConfirm from "../components/passwordConfirm"
import Email from "../components/Email"
import Password from "../components/password"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { FormProvider } from "react-hook-form"
import { useFirebase } from "../hooks/useFirebase"
import { AuthCard } from "../components/AuthCard"
import { SubmitButton } from "../components/SubmitButton"
import { AuthContainer } from "../components/AuthContainer"
import CircularIndeterminate from "../components/CircularIndeterminate"

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email(),
  password: Yup.string().required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match!")
    .required("Required"),
})

const Register = () => {
  const { ...methods } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  })

  const { setUser } = React.useContext(AuthContext)
  const { isFinished, createAccount } = useFirebase()
  const [working, setWorking] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data, e) => {
    setWorking(true)
    createAccount(data.email, data.password, setUser).then(() => {
      setSuccess(true)
      setWorking(false)
    })
  }

  return (
    <>
      {!success && !working && (
        <AuthContainer>
          <AuthCard header="Register">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Email />
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
      {success && (
        <AuthContainer>
          <AuthCard header="Registration successful">
            <div className="account-created">
              <p>Your Account was created. Please verify your email address.</p>
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

export default Register
