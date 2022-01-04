import React from "react"
import { Link } from "gatsby"
import Logo from "../assets/stableyearn2.svg"
import Twitter from "../assets/twitter.svg"
import Facbook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import SocialMedia from "../assets/socialMedia.svg"

const Footer = () => {
  return (
    <footer>
      <div className="flex-container-space-between">
        <div className="grid-container">
          <div className="social-logo">
            <div className="logo">
              {/* <Twitter />
                <Facbook/>
                <Instagram/> */}
              <SocialMedia />
            </div>
          </div>
          <div className="footer-logo">
            <div className="logo">
              <Logo></Logo>
            </div>
          </div>
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} StableYearn. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
