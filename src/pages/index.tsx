import type { NextPage } from 'next'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import App from '../components/App'

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

const Home: NextPage = () => {
    return (
        <div>
            <GlobalStyles />
            <Head>
                <title>Antonio Fran Štignjedec | Resume</title>
                <meta name="description" content="A currated list of my skills" />
            </Head>

            <App />
        </div>
    )
}

export default Home
