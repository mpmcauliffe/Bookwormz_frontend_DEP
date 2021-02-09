import React, { useEffect, } from 'react'
import { useLocation, Route, Switch, } from 'react-router-dom'
import { AnimatePresence, } from 'framer-motion'

import { Provider } from 'react-redux'
import store from './store'

import { Books, Dashboard, Club, Clubs, Landing, UserAuth, } from './pages'
import { Navbar, SecureRoute, } from './dashboard/components'
import setAuthToken from './utils/setAuthToken'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


if(localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {
    const location = useLocation()  // 

    useEffect(() => { M.AutoInit() }, [  ])


    return (
        <Provider store={store}>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route
                        exact
                        path='/'
                        component={Landing} />

                    <Route
                        exact
                        path='/userauth'
                        component={UserAuth} />

                    <SecureRoute 
                        exact
                        path='/dashboard'
                        component={Dashboard} />

                    <SecureRoute
                        exact
                        path='/books'
                        component={Books} />

                    <SecureRoute
                        exact
                        path='/clubs'
                        component={Clubs} />
                </Switch>
            </AnimatePresence>
        </Provider>
        
    )
}


export default App
