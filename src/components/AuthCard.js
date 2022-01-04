import React from 'react'

export const AuthCard = ({header, children}) => {
    return (
      <div className="card container width-50">
        <h2 className="line">{header}</h2>
        {children}
      </div>
    )
}
