import React from 'react'
import Bridge from "../assets/bridge.svg"
import MediaQuery from "react-responsive"

export const AuthContainer = ({children}) => {
    return (
      <>
        <MediaQuery minWidth={1001}>
          <div className="bridge">
            <Bridge></Bridge>
          </div>
        </MediaQuery>
        <div className="flex-container">{children}</div>
      </>
    )
}
