import React from "react"
import { Controller } from "react-hook-form"
import CustomTextfield from "./CustomTextfield"
import ConnectForm from "./ConnectForm"
import { makeStyles, useTheme } from "@material-ui/styles"

const Password = () => {
  const theme = useTheme()
  const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiInputBase-root": {
        color: "white",
      },
      "& label": {
        color: "white",
      },
      "&:hover label": {
        color: theme.palette.primary.main,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: theme.palette.primary.main,
        },
      },
    },
  }))

  const classes = useStyles(theme)

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
              label="Password"
              error={!!formState.errors?.password}
              className={classes.root}
              type="password"
            />
          )}
          name="password"
          control={control}
          defaultValue=""
        />
      )}
    </ConnectForm>
  )
}

export default Password
