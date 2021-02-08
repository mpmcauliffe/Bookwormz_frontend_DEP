import { LOGIN, LOGOUT, ERROR, } from '../types'


const initialState = {
    isAuthenticated: localStorage.token ? true : false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
            }

        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
            }

        case ERROR:
            return {
                ...state,
            }

        default:
            return state
    }
}
