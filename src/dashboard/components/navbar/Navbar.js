import React, { Fragment, } from 'react'
import { Link, } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const NavMenuRight = styled.ul`
    li a {
        color: #6b1f39;
        &:hover { background: transparent; }
    }
    span { visibility: hidden; }

    li:first-of-type { margin: 0 0 1rem -2rem; }
    li:nth-child(2), li:nth-child(3) { margin-top: .6rem; }
    li:nth-child(4), li:nth-child(4) span { visibility: hidden; }

    @media (min-width: 601px) { 
        li:first-of-type { margin: 0 2rem 0 .3rem; }
        li:nth-child(2), li:nth-child(3) { margin-top: 0; }
        span { font-size: 1.9rem; visibility: visible; }
    }
    @media (min-width: 769px) {
        li:nth-child(4), li:nth-child(4) span { visibility: visible; }
    }
`
const NavLogo = styled.img`
    height: 4.5rem;
    margin: .5rem 1rem 0 ;

    @media (min-width: 601px) { height: 6rem; margin-right: 3rem; }
`

const Navbar_proto = ({ isAuthenticated, }) => {

    if (!isAuthenticated) { return null }

    return (
        <Fragment>
            <ul 
                id='burger-menu' 
                className='sidenav'
                style={{ width: '20rem', }} >
                <li><a href='#!'>
                    Account <i className='far fa-user secondary-content' /></a></li>
                <li><Link to='/userauth'>
                    Logout <i className='fas fa-sign-out-alt secondary-content' /></Link></li>
            </ul>

            <nav className='brown lighten-5'>
                <div className='nav-wrapper'>
                <Link 
                    to='/dashboard'>
                    <NavLogo 
                        alt='BKW_LOGO'
                        className='right brand-logo'
                        src={window.innerWidth < 481 
                            ? require(`./bkw-abbr.png`).default
                            : require(`./bkw-small.png`).default} />    
                </Link>
                
                <NavMenuRight className='left '>
                    <li><a
                        className='sidenav-trigger show-on-large' 
                        href='#!' data-target='burger-menu'>
                    <i className='fas fa-bars' /></a></li>
                
                    <li><Link 
                        to='/Clubs'>
                            <i className='fas fa-users' />
                            <span>&nbsp;&nbsp;Clubs</span></Link></li>
                    <li><Link 
                        to='/books'>
                            <i className='fas fa-book' />
                            <span>&nbsp;&nbsp;Books</span></Link></li>

                    <li><Link 
                        to='/dashboard'>
                            <i className='fas fa-tachometer-alt' />
                            <span>&nbsp;&nbsp;Dashboard</span></Link></li>
                </NavMenuRight>
                </div>
            </nav>
        </Fragment>
    )
}


Navbar_proto.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const Navbar = connect(mapStateToProps, { })(Navbar_proto)
export { Navbar }
