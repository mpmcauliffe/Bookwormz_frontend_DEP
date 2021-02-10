import React from 'react'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { MainContent, } from '../components'


export const Clubs = () => {
    return (
        <motion.div 
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
            
            <MainContent>
                <h1>Groups</h1>
                <div style={{ height: '60rem', width: '100%', backgroundColor: '#453299' }} />
            </MainContent>
            
        </motion.div>
    )
}
