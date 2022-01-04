import 'firebase/auth'
import React from 'react'
import AuthProvider from './src/context/auth'
import {Layout} from './src/components/Layout'


export const wrapRootElement = ({ element }) => (
    <AuthProvider>{element}</AuthProvider>
)

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

