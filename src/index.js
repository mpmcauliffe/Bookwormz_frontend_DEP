import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import App from './App'
import { ThemeProvider, } from 'styled-components'
import { GlobalStyle, } from './global/AppStyles.comp'
import { Theme, } from './global/themes/themeLight'
import 'normalize.css'
import './global/font.css'


ReactDOM.render(
    <Router>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Route component={App} />
        </ThemeProvider>
    </Router>,
    document.getElementById('root')
)
