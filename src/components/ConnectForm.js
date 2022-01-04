import { FormProvider, useFormContext } from "react-hook-form"
import React, { useState } from "react"

const ConnectForm = ({ children }) => {
  const methods = useFormContext()

  return children({ ...methods })
}

export default ConnectForm