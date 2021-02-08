import React from 'react'
import { motion, } from 'framer-motion'


const pageTransition = {
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: '200%'
    }
}

export const Groups = () => {
    return (
        <motion.div exit='out' animate='in' initial='out' variants={pageTransition}>
            
            <h1>Groups</h1>

            <div style={{ height: '60rem', width: '100%', backgroundColor: '#453299' }} />
        </motion.div>
    )
}
