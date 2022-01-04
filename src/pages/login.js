import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@material-ui/core"
import { navigate } from "gatsby"
import Email from "../components/Email"
import Password from "../components/password"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { FormProvider } from "react-hook-form"
import { useFirebase } from "../hooks/useFirebase"
import { AuthCard } from "../components/AuthCard"
import { SubmitButton } from "../components/SubmitButton"
import { AuthContainer } from "../components/AuthContainer"
import { Link } from "gatsby"
import CircularIndeterminate from "../components/CircularIndeterminate"
import { AuthContext } from "../context/auth"

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email(),
  password: Yup.string().required("Required"),
})

const Login = () => {
  const { ...methods } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  })

  const { user, setUser } = React.useContext(AuthContext)
  const { isFinished, signInWithEmailAndPassword } = useFirebase()
  const [working, setWorking] = useState(false)

  const onSubmit = async (data, e) => {
    setWorking(true)
    signInWithEmailAndPassword(data.email, data.password, setUser).then(data => {
      navigate("/")
    })
  }

  return (
    <>
      {!(!isFinished && working) && (
        <AuthContainer>
          <AuthCard header="Login">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Email />
                <Password />
                <Link to="/requestResetPassword">
                  <div className="forgot-password">
                    <p>Forgot Password?</p>
                  </div>
                </Link>
                <div className="register-btn">
                  <SubmitButton title="submit" />
                </div>
              </form>
            </FormProvider>
          </AuthCard>
        </AuthContainer>
      )}
      {!isFinished && working && (
        <CircularIndeterminate></CircularIndeterminate>
      )}
    </>
  )
}

export default Login
