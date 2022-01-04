import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"
import { handleException } from "../utils/exceptionService"

export const useFirebase = () => {
  const [isFinished, setIsFinished] = useState(false)
  const [email, setEmail] = useState(null)

  const subscribeToAuthState = setUser => {
    return firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }

  const createAccount = async (email, password, setUser) => {
    setIsFinished(false)
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        setUser(result.user)
        return result.user.sendEmailVerification()
      })
      .then(() => {
        setIsFinished(true)
      })
      .catch(error => {
        handleException(error)
      })
  }

  const handleResetPassword = actionCode => {
    // Localize the UI to the selected language as determined by the lang
    // parameter.

    // Verify the password reset code is valid.

    setIsFinished(false)
    return firebase
      .auth()
      .verifyPasswordResetCode(actionCode)
      .then(email => {
        setIsFinished(true)
        setEmail(email)
      })
  }

  const resetPassword = async (data, actionCode, e) => {
    // Save the new password.
    setIsFinished(false)
    firebase
      .auth()
      .confirmPasswordReset(actionCode, data.password)
      .then(resp => {
        setIsFinished(true)
        //firebase.auth().signInWithEmailAndPassword(email, data.password)
        // Password reset has been confirmed and new password updated.
        // TODO: Display a link back to the app, or sign-in the user directly
        // if the page belongs to the same domain as the app:
        // auth.signInWithEmailAndPassword(accountEmail, newPassword);
        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
      })
      .catch(error => {
        handleException(error)
        // Error occurred during confirmation. The code might have expired or the
        // password is too weak.
      })
  }

  const handleVerifyEmail = actionCode => {
    // Localize the UI to the selected language as determined by the lang
    // parameter.
    // Try to apply the email verification code.
    setIsFinished(false)
    return firebase
      .auth()
      .applyActionCode(actionCode)
      .then(resp => {
        setIsFinished(true)
        // Email address has been verified.
        // TODO: Display a confirmation message to the user.
        // You could also provide the user with a link back to the app.
        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
      })
  }

  const sendPasswordResetEmail = email => {
    setIsFinished(false)
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setIsFinished(true)
        // Password reset email sent!
        // ..
      })
      .catch(error => {
        var errorCode = error.code
        var errorMessage = error.message
        handleException(error)
        // ..
      })
  }

  const signInWithEmailAndPassword = (email, password, setUser) => {
    setIsFinished(false)
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        setUser(result.user)
        setIsFinished(true)
      })
      .catch(error => {
        var errorCode = error.code
        var errorMessage = error.message
        handleException(error)
        // ..
      })
  }

  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(error => {
        handleException(error)
      })
  }

  const checkRole = (user, role) => {
    if (!user) return Promise.resolve(false)

    return user
      .getIdTokenResult()
      .then(idTokenResult => {
        // Confirm the user is an Admin.
        if (!!idTokenResult.claims[role]) {
          // Show admin UI.
          return true
        } else {
          // Show regular user UI.
          return false
        }
      })
      .catch(error => {
        handleException(error)
      })
  }

  return {
    isFinished,
    ...{
      email,
      createAccount,
      subscribeToAuthState,
      handleResetPassword,
      resetPassword,
      handleVerifyEmail,
      sendPasswordResetEmail,
      signInWithEmailAndPassword,
      logout,
      checkRole,
    },
  }
}
