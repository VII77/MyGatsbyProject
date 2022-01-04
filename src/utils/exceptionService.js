import { navigate } from "gatsby-link"


 export function handleException(error) {
    console.log(error)
    navigate("/serverError/")
  }

