import React from "react"
import NotFoundError from "../assets/pageNotFound2.svg"
import MediaQuery from "react-responsive"
import { AuthCard } from "../components/AuthCard"

const PageNotFound = () => {
  return (
    <div className="flex-container">
      <MediaQuery minWidth={1001}>
        <div className="notFound">
          <NotFoundError></NotFoundError>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1000}>
        <AuthCard header="404">
          <p>Oops! Page not found.</p>
        </AuthCard>
      </MediaQuery>
    </div>
  )
}

export default PageNotFound
