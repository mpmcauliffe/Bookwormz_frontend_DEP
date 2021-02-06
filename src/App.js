import React, { useState, useEffect, } from 'react'
// import { withCookies } from 'react-cookie'
import { Route, Redirect, Switch, } from 'react-router-dom'
import { Dashboard, Landing, UserLogin, } from './pages'
import setAuthToken from './utils/setAuthToken'


if(localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {
    const [key, setKey] = useState(null)
    
    useEffect(() => {

    }, [])

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

//export default withCookies(App)
export default App
