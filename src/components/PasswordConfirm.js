import React from "react"
import { Controller } from "react-hook-form"
import CustomTextfield from "./CustomTextfield"
import ConnectForm from "./ConnectForm"

const PasswordConfirm = () => {
  return (
    <ConnectForm>
      {({ control }) => (
        <Controller
          render={({ field, formState }) => (
            <CustomTextfield
              {...field}
              fullWidth
              margin="normal"
              variant="outlined"
              label="Password confirmation"
              error={!!formState.errors?.passwordConfirm}
              type="password"
            />
          )}
          name="passwordConfirm"
          control={control}
          defaultValue=""
        />
      )}
    </ConnectForm>
  )
}

export default PasswordConfirm
