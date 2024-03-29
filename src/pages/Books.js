import React from 'react'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { HeaderSection, MainContent, Searchbar, } from '../components'


export const Books = () => {
    return (
        <motion.div 
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
                <MainContent>
                    <HeaderSection>
                        <h1>Books</h1>
                        <Searchbar />
                    </HeaderSection>
                    <div style={{ height: '60rem', width: '100%', backgroundColor: '#982233' }} />
                </MainContent>
        </motion.div>        
    )
}
