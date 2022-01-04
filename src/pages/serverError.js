import React from "react"
import Error from "../assets/error.svg"
import MediaQuery from "react-responsive"
import {AuthCard} from "../components/AuthCard"

const ServerError = () => {
  return (
    <>
      <MediaQuery minWidth={1001}>
        <div className="serverError">
          <Error></Error>
        </div>
      </MediaQuery>
      <AuthCard header="Oops!"><p>Sorry, something went wrong.</p></AuthCard>
    </>
  )
}

export default ServerError
