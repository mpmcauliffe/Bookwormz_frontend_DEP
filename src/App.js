import React from 'react'
import { withCookies } from 'react-cookie'
import { Route, Switch, } from 'react-router-dom'
import { Landing, Userkey, } from './pages'


function App(props) {
console.log(props.cookies.HAS_DOCUMENT_COOKIE)

    return (
        <Switch>
            <Route
                exact
                path='/'
                component={Landing} />

            <Route
                exact
                path='/userkey'
                render={() => (
                    <Userkey cookies={props.cookies} /> )} />
        </Switch>
    )
}

export default withCookies(App)
//export default App
