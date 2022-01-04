import React from 'react'
import { Button } from "@material-ui/core"

export const SubmitButton = ({title}) => {
    return (
      <div className="register-btn ">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          size="large"
        >
          {title}
        </Button>
      </div>
    )
}
