import React from 'react'
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'

import PrivateRoutes from './components/authRoutes/privateRoutes'
import PublicRoutes from './components/authRoutes/publicRoutes'

import Home from './components/home'
import SignIn from './components/signIn'
import Dashboard from './components/admin/Dashboard'

const Routes = (props) =>{

  console.log(props)

  return (
    <Layout>
        <Switch>
            <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
            <PublicRoutes {...props} restricted={true} path="/sign_in" exact component= {SignIn}  />
            <PublicRoutes {...props} restricted={false} path="/" exact component= {Home}  />
        </Switch>
    </Layout>
  )
}
    
export default Routes




