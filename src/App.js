import React, { useEffect, } from 'react'
import { useLocation, Route, Switch, 
    BrowserRouter as Router, } from 'react-router-dom'
import { AnimatePresence, motion, } from 'framer-motion'

import { Provider } from 'react-redux'
import store from './store'

import { Books, Club, Clubs, Landing, UserLogin, } from './pages'
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
        <Provider store={store}>
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
                            path='/dashboard/clubs'
                            component={Clubs} />
                    </Switch>
                </AnimatePresence>
            </Router>
        </Provider>
        
    )
}


export default App
