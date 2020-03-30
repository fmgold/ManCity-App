import React from 'react'
import Layout from './Hoc/Layout'
import { Switch } from 'react-router-dom'

import PrivateRoutes from './components/authRoutes/privateRoutes'
import PublicRoutes from './components/authRoutes/publicRoutes'

import Home from './components/home'
import SignIn from './components/signIn'
import TheTeam from './components/theTeam'

import Dashboard from './components/admin/Dashboard'
import AdminMatches from './components/admin/matches'
//import AddEditMatch from './components/admin/matches/addEditMatch'
import AdminPlayers from './components/admin/players'
import AddEditPlayers from './components/admin/players/addEditPlayers'

 

const Routes = (props) =>{

  return (
    <Layout>
        <Switch>
            <PrivateRoutes {...props} path="/admin_matches/add_players" exact component={AddEditPlayers} />
            <PrivateRoutes {...props} path="/admin_matches/add_players/:id" exact component={AddEditPlayers} />
            <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers} />
            <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
            <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
            <PublicRoutes {...props} restricted={true} path="/sign_in" exact component= {SignIn}  />
            <PublicRoutes {...props} restricted={false} path="/the_team" exact component= {TheTeam}  />
            <PublicRoutes {...props} restricted={false} path="/" exact component= {Home}  />
        </Switch>
    </Layout>
  )
}
    
export default Routes;




