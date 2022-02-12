import type { NextPage } from 'next'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import App from '../components/App'
import Navbar from "../components/navbar/Navbar";

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

const Home: NextPage = () => {
    return (
        <>
            <GlobalStyles />
            <Head>
                <title>Antonio Fran Štignjedec | Resume</title>
		        <link rel="icon" href="/favicon.png" />
                <meta name="description" content="A currated list of my skills" />
		        <meta name="viewport" content="width=device-width, initial-scale=1;" />
            </Head>


            <Container>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
                <App />
            </Container>
        </>
    )
}

export default Home
