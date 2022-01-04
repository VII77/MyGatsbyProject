import React, { useState } from "react"
import { AuthContext } from "../context/auth"
import { useForm } from "react-hook-form"
import Button from "@material-ui/core/Button"
import { navigate } from "gatsby"
import Email from "../components/Email"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { FormProvider } from "react-hook-form"
import { useFirebase } from "../hooks/useFirebase"
import { AuthCard } from "../components/AuthCard"
import { AuthContainer } from "../components/AuthContainer"
import CircularIndeterminate from "../components/CircularIndeterminate"

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
})

const RequestResetPassword = () => {
  const { ...methods } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  })

  const { setUser } = React.useContext(AuthContext)
  const { isFinished, sendPasswordResetEmail } = useFirebase()
  const [working, setWorking] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data, e) => {
    setWorking(true)
    sendPasswordResetEmail(data.email).then(() => {
      setSuccess(true)
      setWorking(false)
    })
  }

  return (
    <>
      {!success && !working && (
        <AuthContainer>
          <AuthCard header="Request reset of password">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Email />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Send email
                </Button>
              </form>
            </FormProvider>
          </AuthCard>
        </AuthContainer>
      )}
      {success && (
        <AuthContainer>
          <AuthCard header="Email sent">
            <div className="email-sent">
              <p>We sent you a link to reset your password.</p>
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

export default RequestResetPassword
