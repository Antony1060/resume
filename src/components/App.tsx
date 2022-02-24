import styled, { createGlobalStyle } from 'styled-components'
import Navbar from './navbar/Navbar'

const GlobalStyles = createGlobalStyle`
    * {
        font-family: Roboto, Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #0A0D13;
        color: white;
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
`

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 1000px;
    max-width: 100%;
    gap: 2rem;
    padding: 2rem;
    text-align: start;
`

const Version = styled.a`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    margin-top: 2rem;
    &:hover {
        color: white;
        text-decoration: underline;
    }
    @media print {
        display: none;
    }
`

const Alert = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;
    span:first-child {
        font-size: 4rem;
    }
    span:nth-child(2) {
        opacity: 0.6;
    }
`

function App() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
                <Alert>
                    <span>Work in progress...</span>
                    <span>Check back later</span>
                </Alert>
                <Version href="https://github.com/Antony1060/resume" target="_blank">Version { import.meta.env.VITE_COMMIT_REF ?? "development" }</Version>
            </Container>
        </>
    )
}

export default App
