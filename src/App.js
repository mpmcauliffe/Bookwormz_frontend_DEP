import React, { useEffect, } from 'react'
import { Route, Switch, } from 'react-router-dom'
import { Landing, UserLogin, } from './lock'
import { Dashboard } from './dashboard'
import setAuthToken from './utils/setAuthToken'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


if(localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {
    useEffect(() => { M.AutoInit() }, [  ])

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
