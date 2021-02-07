import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Navbar, } from './components'
import { Books, Group, Groups } from '../pages'


export const Dashboard = () => {
    return (
        <Router>
            <Navbar />
            <h3>Dashboard</h3>
            <Switch>
                <Route
                    exact
                    path='/dashboard/books'
                    component={Books} />

                <Route
                    exact
                    path='/dashboard/groups'
                    component={Groups} />
            </Switch>
        </Router>
        
    )
}
