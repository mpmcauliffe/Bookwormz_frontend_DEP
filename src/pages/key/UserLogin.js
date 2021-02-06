import React, { useState, useEffect, } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Dashboard } from '../dashboard/Dashboard'
import styled from 'styled-components'
import './spinner.css'

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
export const UserLogin = props => {
    const [key, setKey] = useState('')

    const getKey = async () => {
        try {
            const res = await axios.get('/auth/token')
            if (res.data.token) {
                setTimeout(() => {
                    localStorage.setItem('token', res.data.token)
                    console.log(res.data.token)
                    props.history.push('/dashboard')
                }, 1000);
                //return <Redirect to='/dashboard' />
            }
            return props.history.push('/')
            
        } catch (e) {
            console.log(e)
        }
    }   

    useEffect(() => {
        getKey()
    }, [ ])

    return (
        <SpinnerContainer>
            <div className='lds-dual-ring'></div>            
        </SpinnerContainer>
    )
}
