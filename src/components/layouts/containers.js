import styled from 'styled-components'


export const MainContent = styled.main`
    width: 100vw;
    padding: 1rem;
    margin: 2rem auto;

    @media (min-width: 601px) { 
        width: 80vw;
        /* margin: 4rem auto;  */
    }
`

export const HeaderSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 { color: ${p => p.theme.primary}; }
`
