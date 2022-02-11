import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
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

const App: FC = () => {
    return (
        <Container>
            <span>Work in progress...</span>
            <span>Check back later</span>
        </Container>
    )
}

export default App;