import React from "react"
import { Controller } from "react-hook-form"
import ConnectForm from "./ConnectForm"
import CustomTextfield from "./CustomTextfield"

const Email = () => {
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
              label="Email"
              error={!!formState.errors?.email}
            />
          )}
          name="email"
          control={control}
          defaultValue=""
        />
      )}
    </ConnectForm>
  )
}

export default Email