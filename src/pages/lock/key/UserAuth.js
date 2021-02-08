import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login, logout, } from '../../../redux/actions/authActions'
import styled from 'styled-components'


// see https://loading.io/css/ for cool CSS spinners
const SpinnerContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .5;

    .lds-dual-ring {
        display: inline-block;
        width: 170px;
        height: 100px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 100px;
        height: 100px;
        margin: 8px;
        border-radius: 50%;
        border: 15px solid #6b1f39;
        border-color: #6b1f39 transparent #6b1f39 transparent;
        animation: lds-dual-ring 3s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
`
const UserAuth_proto = ({ login, logout, isAuthenticated, history, }) => {
    useEffect(() => {
        if (!isAuthenticated) {
            setTimeout(() => { login(history) }, 1000)
        } else {
            localStorage.removeItem('token')   
            setTimeout(() => { logout(history) }, 1000)
        }
    })

    return (
        <SpinnerContainer>
            <div className='lds-dual-ring'></div>            
        </SpinnerContainer>
    )
}


UserAuth_proto.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const UserAuth = connect(mapStateToProps, { login, logout, })(UserAuth_proto)
export { UserAuth }
