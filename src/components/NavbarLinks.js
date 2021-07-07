import React from "react"
import { useHistory } from "react-router-dom"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";

export const NavbarLinks = (show, setShow) => {

  const isMobileDevice = useMediaQuery({ query: "(max-width: 1000px)" });
  const history =  useHistory();

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
        to="/recipes"
        className={`nav-link ${isMobileDevice ? "mobile-nav-link" : ""}`}
        activeClassName="active-link"
        onClick={() => setShow(!show)}
      >
        recipes
      </Link>
      <div className={`nav-link ${isMobileDevice ? "mobile-nav-link" : ""}`}>
        <Link
          variant="contained"
          color="secondary"
          to="/contact"
          className="btn"
        >
          Contact
        </Link>
      </div>
    </>
  )
}




