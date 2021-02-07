import React, { Fragment, useEffect, } from 'react'
import styled from 'styled-components'
import M from 'materialize-css/dist/js/materialize.min.js'


//M.Sidenav.init(elems, {edge:'right'}
const NavMenuRight = styled.ul`
    li a {
        color: #6b1f39;
        &:hover { background: transparent; }
    }
`


export const Navbar = () => {

    useEffect(() => { M.Sidenav.init(null, {edge:'right'}) }, [  ])
   


    return (
        <Fragment>
            <ul 
                id='burger-menu' 
                className='sidenav'
                style={{ width: '20rem', }} >
                <li><a href='#!'>
                    Account <i className='far fa-user secondary-content' /></a></li>
                <li><a href='#!'>
                    Logout <i className='fas fa-sign-out-alt secondary-content' /></a></li>
            </ul>

            <nav className='brown lighten-5'>
                <div className='nav-wrapper'>
                <img 
                    alt='BKW_LOGO'
                    className='right brand-logo'
                    style={{ height: '6rem', }}
                    src={require(`./bkw-small.png`).default} />
                <NavMenuRight className='left hide-on-med-and-down'>
                    <li><a 
                        className='sidenav-trigger show-on-large' 
                        href='#!' data-target='burger-menu'>
                    <i class='fas fa-bars'></i></a></li>
                    
                    <li><a href='badges.html'>
                        <i className='fas fa-users' /></a></li>
                    <li><a href='sass.html'>
                        <i className='fas fa-book' /></a></li>
                </NavMenuRight>
                </div>
            </nav>
        </Fragment>
    )
}
