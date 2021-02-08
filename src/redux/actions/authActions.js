import axios from 'axios'
import { LOGIN, LOGOUT, ERROR, } from '../types'


/* authenticates user */
export const login = history => async dispatch => {
    try {
        const res = await axios.get('/auth/token')
        localStorage.setItem('token', res.data.token)
                
            
        if (res.data.token) {
            history.push('/dashboard')    
            dispatch({ type: LOGIN })
        }
        //return props.history.push('/')
        
    } catch (e) {
        history.push('/')
        dispatch({ type: ERROR })
    }
}

/* logs out user */
export const logout = history => async dispatch => {
    try {
        // localStorage.removeItem('token')
        // const res = await axios.get('/auth/token')
                
        history.push('/') 
        dispatch({ type: LOGOUT })
        
    } catch (e) {
        history.push('/dashboard')
        dispatch({ type: ERROR })
    }
}

