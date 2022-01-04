import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import { useTheme } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(6),
      color: theme.palette.primary.main,
    },
  },
}))

export default function CircularIndeterminate() {
    const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.root}>
      <CircularProgress color="primary" size="80px" />
    </div>
  )
}
