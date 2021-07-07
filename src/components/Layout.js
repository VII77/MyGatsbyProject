import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "styled-components"
import "normalize.css"
import "../assets/css/main.scss"
import StyledBackgroundSection from "./BackgroundSection"

const theme = {
  /* COLORS  */
  /* primary */
  primary0: "#f0efff",
  primary50: "#d8d6ff",
  primary100: "#c1beff",
  primary200: "#aaa5ff",
  primary300: "#938dff",
  primary400: "#7b74ff",
  /* main */
  primary500: "#645cff",
  primary600: "#554ed9",
  primary700: "#4640b3",
  primary800: "#37338c",
  primary900: "#282566",
  primary1000: "#191740",
  primary1100: "#0a0919",
  /* grey */
  grey0: "#fafbfc",
  grey50: "#f2f4f8",
  grey100: "#eaedf3",
  grey200: "#e2e7ef",
  grey300: "#dbe0ea",
  grey400: "#d3dae6",
  grey500: "#cbd3e1",
  grey600: "#adb3bf",
  grey700: "#8e949e",
  grey800: "#70747c",
  grey900: "#51545a",
  grey1000: "#333538",
  grey1100: "#141516",

  /* rest */
  black: "#222",
  white: "#fff",
  redlight: "#f8d7da",
  reddark: "#842029",
  greenlight: "#d1e7dd",
  greendark: "#0f5132",

  defaultFontSize: "87.5%",
  headingFont: "Inconsolata, monospace",
  bodyFont: "Roboto, sans-serif",
  smallText: "0.8em",
  extraSmallText: "0.7em",
  /* rest */

  borderRadius: "0.25rem",
  letterSpacing: '1px',
  transition: '0.3s ease-in-out all',
  maxWidth: '1120px',
  fixedWidth: '600px',

  navbarColor: "#8FBC8F"
}

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>

        <Navbar />
        {children}
        <Footer />

    </ThemeProvider>
  )
}
