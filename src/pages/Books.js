import React from 'react'
import { motion, } from 'framer-motion'


const pageTransition = {
    in: {
        opacity: 1,
        x: 0,
    },
    ini: {
        opacity: 0,
        x: '200%'
    },
    out: {
        opacity: 1,
        x: '-100%'
    }
}

export const Books = () => {
    return (
        <motion.div exit='out' animate='in' initial='ini' variants={pageTransition}>
            <h1>Books</h1>

            <div style={{ height: '60rem', width: '100%', backgroundColor: '#982233' }} />
        </motion.div>        
    )
}
