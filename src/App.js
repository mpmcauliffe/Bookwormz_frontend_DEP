import React, { useEffect, } from 'react'
import { Route, Switch, 
    BrowserRouter as Router, } from 'react-router-dom'
import { AnimatePresence, } from 'framer-motion'

import { Provider } from 'react-redux'
import store from './store'

import { Books, Dashboard, Clubs, Landing, 
    UserAuth, } from './pages'
import { Navbar, SecureRoute, } from './components'
import setAuthToken from './utils/setAuthToken'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


if(localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {
    // const location = useLocation()  // 
    //const [toggleNav, setToggleNav] = useState(true)
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
            </Router>
        </Provider>
        
    )
}


export default App
