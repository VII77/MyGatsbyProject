import React, { useState } from "react"
import { Link } from "gatsby"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Logo from "../assets/stableyearn2.svg"
import { NavbarLinks } from "./NavbarLinks"
import styled from "styled-components"
import AnimateHeight from "react-animate-height"
import MediaQuery from "react-responsive"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [height, setHeight] = useState(0)

  const toggleMenu = () => {
    setHeight(height === 0 ? "auto" : 0)
  }

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-flex-container">
            <div>
              <Link to="/">
                <Logo className="logo"></Logo>
              </Link>
            </div>
            <div>
              <MediaQuery minWidth={1001}>
                <div className="flex-container">
                  <NavbarLinks {...{ show, setShow }} />
                </div>
              </MediaQuery>
              <MediaQuery maxWidth={1000}>
                <button
                  className="nav-btn"
                  aria-controls="menu"
                  aria-expanded={height !== 0}
                  onClick={toggleMenu}
                >
                  {height === 0 ? <AiOutlineMenu /> : <AiOutlineClose />}
                </button>
              </MediaQuery>
            </div>
          </div>
        </div>
      </nav>
      <MediaQuery maxWidth={1000}>
        <MenuBackground>
          <AnimateHeight id="menu" height={height} className="AnimateHeight">
            <NavbarLinks />
          </AnimateHeight>
        </MenuBackground>
      </MediaQuery>
    </>
  )
}

const MenuBackground = styled.section`
  background: #3c9073;
  position: fixed;
  width: 100vw;
  top: 5rem;
`

export default Navbar
