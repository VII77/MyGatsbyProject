import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"
import "normalize.css"
import "../assets/css/main.scss"
import StyledBackgroundSection from "./BackgroundSection"
import styled from "styled-components"
import Wave from "../assets/backgroundwave.svg"


const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#6fc3a4",
    },
    secondary: {
      main: "#51545a",
    },
  },
})

export const Layout = ({ children }) => {
  return (
    <div className="box">
      <ThemeProvider theme={muiTheme}>
        <div className="row-header">
          <Navbar />
        </div>
        <Background>
          <Wave></Wave>
        </Background>
        <div className="row-content flex-container">{children}</div>
        <div className="row-footer">
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  background-attachment: fixed;
  z-index: -20;
`
