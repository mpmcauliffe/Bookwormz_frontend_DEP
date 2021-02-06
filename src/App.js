import React from 'react'
import { Route, Switch, } from 'react-router-dom'
import { Landing, UserLogin, } from './lock'
import { Dashboard } from './dashboard'
import setAuthToken from './utils/setAuthToken'


if(localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {

    return (
        <Switch>
            <Route
                exact
                path='/'
                component={Landing} />

            <Route
                exact
                path='/userlogin'
                component={UserLogin} />

            <Route 
                exact
                path='/dashboard'
                component={Dashboard} />
        </Switch>
    )
}


export default App
