import React from 'react'
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'

import PrivateRoutes from './components/authRoutes/privateRoutes'
import PublicRoutes from './components/authRoutes/publicRoutes'

import Home from './components/home'
import SignIn from './components/signIn'
import TheTeam from './components/theTeam'

import Dashboard from './components/admin/Dashboard'
import AdminMatches from './components/admin/matches'
import AddEditMatch from './components/admin/matches/addEditMatch'
import AdminPlayers from './components/admin/players'
import AddEditPlayers from './components/admin/players/addEditPlayers'



const Routes = (props) =>{

  return (
    <Layout>
        <Switch>
            <PrivateRoutes {...props} path="/admin_players/add_player" exact component={AddEditPlayers} />
            <PrivateRoutes {...props} path="/admin_players/add_player/:id" exact component={AddEditPlayers} />
            <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers} />
            <PrivateRoutes {...props} path="/admin_matches/edit_match" exact component={AddEditMatch} />
            <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
            <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
            <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
            <PublicRoutes {...props} restricted={true} path="/sign_in" exact component= {SignIn}  />
            <PublicRoutes {...props} restricted={false} path="/the_team" exact component= {TheTeam}  />
            <PublicRoutes {...props} restricted={false} path="/" exact component= {Home}  />
        </Switch>
    </Layout>
  )
}
    
export default Routes




