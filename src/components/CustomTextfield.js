import React from "react"
import TextField from "@material-ui/core/TextField"

import { makeStyles, useTheme } from "@material-ui/styles"

const CustomTextfield =  React.forwardRef((props, ref) => {
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
      }
    }
  }))

  const classes = useStyles(theme)

  return (
    <TextField
    innerRef={ref}
    {...props}
      fullWidth
      margin="normal"
      variant="outlined"
      className={classes.root}
    />
  )
})

export default CustomTextfield
