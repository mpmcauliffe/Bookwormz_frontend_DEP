import { LOGIN, LOGOUT, ERROR, } from '../types'


const initialState = {
    isAuthenticated: typeof localStorage.token !== 'undefined' ? true : false,
    error: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                error: '',
            }

        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                error: ''
            }

        case ERROR:
            //localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                error: 'Something went wrong.'
            }

        default:
            return state
    }
}
