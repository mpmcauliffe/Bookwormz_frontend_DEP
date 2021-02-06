import React from 'react'
import { Route, Redirect, } from 'react-router-dom'


// export const Route = ({ component: Component, ...rest }) => {
//     const authContext = useContext(AuthContext)
//     const { isAuthenticated, loading, } = authContext

//     console.log(isAuthenticated)
//     return (
//         <Route 
//             { ...rest } 
//             render={props => !isAuthenticated && !loading
//                 ?   (
//                         <Redirect to='/' />
//                 ) : (
//                         <Component { ...props } />
//                 )
//             } />
//     )
// }
