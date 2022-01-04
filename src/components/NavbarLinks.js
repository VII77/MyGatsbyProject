import React from "react"
import { useHistory } from "react-router-dom"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import { AuthContext } from "../context/auth"
import User from "../assets/user2.svg"
import { useFirebase } from "../hooks/useFirebase"

export const NavbarLinks = ({show, setShow}) => {
  const { user, setUser } = React.useContext(AuthContext)
  const isMobileDevice = useMediaQuery({ query: "(max-width: 1000px)" })
  const {logout} = useFirebase()

  const signOut = () => logout().then(setUser(null))

  return (
    <>
      <Link
        to="/"
        className={`nav-link ${isMobileDevice ? "mobile-nav-link" : ""}`}
        activeClassName="active-link"
        onClick={() => setShow(!show)}
      >
        home
      </Link>
      <Link
        to="/app/premium"
        className={`nav-link ${isMobileDevice ? "mobile-nav-link" : ""}`}
        activeClassName="active-link"
        onClick={() => setShow(!show)}
      >
        Premium
      </Link>
      {user && (
        <>
          <Link
            to="/app/account"
            className={`nav-link ${isMobileDevice ? "mobile-nav-link" : ""}`}
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            <div className="user-logo flex-container">
              <User></User>
            </div>
          </Link>
          <div
            className={`nav-link ${isMobileDevice ? "mobile-nav-link" : ""}`}
          >
            <button
              variant="contained"
              color="secondary"
              to="/login"
              className="btn"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        </>
      )}
      {!user && (
        <>
          <div
            className={`nav-link ${isMobileDevice ? "mobile-nav-link" : ""}`}
          >
            <Link
              variant="contained"
              color="secondary"
              to="/login"
              className="btn"
            >
              Login
            </Link>
          </div>
          <div
            className={`nav-link ${isMobileDevice ? "mobile-nav-link" : ""}`}
          >
            <Link
              variant="contained"
              color="secondary"
              to="/register"
              className="btn"
            >
              Register
            </Link>
          </div>
        </>
      )}
    </>
  )
}
