import { useCookies } from 'react-cookie'

import logo from './logo.svg'
import './App.css'

function App() {
    const [cookies, setCookie] = useCookies(['connect.sid'])
console.log(cookies)
    const handleCookie = () => {
        setCookie('fuckoff', 'cookie', {
            path: 'http://localhost:5000'
        })
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            <button onClick={handleCookie}>cookie</button>
        </div>
    );
}

export default App;
