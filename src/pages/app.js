import React from 'react'
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import PremiumRoute from "../components/PremiumRoute"
import PremiumContent from "../components/PremiumContent"
import { Account } from "../components/Account"

const App = () => {
  return (
    <Router>
      <PremiumRoute path="/app/premium" component={PremiumContent} />
      <PrivateRoute path="/app/account" component={Account} />
    </Router>
  )
}

export default App

