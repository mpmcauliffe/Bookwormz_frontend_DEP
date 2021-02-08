import React, { useEffect, } from 'react'
import { useLocation, Route, Switch, 
    BrowserRouter as Router, } from 'react-router-dom'
import { AnimatePresence, motion, } from 'framer-motion'

import { Books, Group, Groups, Landing, UserLogin, } from './pages'
import { Dashboard } from './dashboard'
import { Navbar, } from './dashboard/components'
import setAuthToken from './utils/setAuthToken'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


if(localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {
    // const location = useLocation()  // location={location} key={location.pathname}

    useEffect(() => { M.AutoInit() }, [  ])


    return (
        <Router>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
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

                    <Route
                        exact
                        path='/dashboard/books'
                        component={Books} />

                    <Route
                        exact
                        path='/dashboard/groups'
                        component={Groups} />
                </Switch>
            </AnimatePresence>
        </Router>
    )
}


export default App
