import React from 'react'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'


export const Dashboard = () => {

    return (
        <motion.div
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
            
            <h1>Dashboard</h1>
            
            <div style={{ height: '60rem', width: '100%', backgroundColor: '#dfdf22' }} />
        </motion.div>
        
    )
}
