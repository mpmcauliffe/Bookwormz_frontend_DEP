import React from 'react'
import ReactDOM from 'react-dom'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import App from './App'
import { ThemeProvider, } from 'styled-components'
import { GlobalStyle, } from './global/AppStyles.comp'
import { Theme, } from './global/themes/themeLight'
import 'normalize.css'
import './global/font.css'


ReactDOM.render(
    <CookiesProvider>
        <Router>
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <Route component={App} />
            </ThemeProvider>
        </Router>
    </CookiesProvider>,
    document.getElementById('root')
)
