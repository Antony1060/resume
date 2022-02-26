import styled, { createGlobalStyle } from 'styled-components'
import SectionContainer from './elements/SectionContainer'
import Navbar from './navbar/Navbar'
import GithubCalendar from './parts/calendar/GithubCalendar'
import Education from './parts/education/Education'
import Introduction from './parts/Introduction'
import Repositories from './parts/repositories/Repositories'
import Skillset from './parts/skillset/Skillset'

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

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    padding: 1rem;
    gap: 3rem;
`

function App() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
                <ContentContainer>
                    <Introduction />
                    <Education />
                    <SectionContainer name="Work history" />
                    <Skillset />
                    <Repositories />
                    <GithubCalendar />
                </ContentContainer>
                <Version
                    href="https://github.com/Antony1060/resume"
                    target="_blank"
                    dangerouslySetInnerHTML={{ __html: "Version " + (import.meta.env.VITE_COMMIT_REF as string | undefined ?? "development") }}
                ></Version>
            </Container>
        </>
    )
}

export default App
