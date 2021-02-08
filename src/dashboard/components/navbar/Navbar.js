import React, { Fragment, } from 'react'
import { Link, } from 'react-router-dom'
import styled from 'styled-components'
//import M from 'materialize-css/dist/js/materialize.min.js'


//M.Sidenav.init(elems, {edge:'right'}
const NavMenuRight = styled.ul`
    li a {
        color: #6b1f39;
        &:hover { background: transparent; }
    }
    span { visibility: hidden; }

    li:first-of-type { margin-right: 1rem; }
    li:nth-child(2), li:nth-child(3) { margin-top: .6rem; }

    @media (min-width: 601px) { 
        li:first-of-type { margin-right: 2rem; }
        li:nth-child(2), li:nth-child(3) { margin-top: 0; }
        span { font-size: 1.9rem; visibility: visible; }
    }
`
const NavLogo = styled.img`
    /* height: 6rem; */
    height: 5.5rem;
    margin-right: 3rem;

    @media (min-width: 601px) { height: 6rem; }
`
//hide-on-med-and-down

export const Navbar = () => {

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
                <NavLogo 
                    alt='BKW_LOGO'
                    className='right brand-logo'
                    src={require(`./bkw-small.png`).default} />
                <NavMenuRight className='left '>
                    <li><a
                        className='sidenav-trigger show-on-large' 
                        href='#!' data-target='burger-menu'>
                    <i className='fas fa-bars' /></a></li>
                
                    <li><Link to='/dashboard/Clubs'>
                        <i className='fas fa-users' />
                        <span>&nbsp;&nbsp;Clubs</span></Link></li>
                    <li><Link to='/dashboard/books'>
                        <i className='fas fa-book' />
                        <span>&nbsp;&nbsp;Books</span></Link></li>
                </NavMenuRight>
                </div>
            </nav>
        </Fragment>
    )
}
