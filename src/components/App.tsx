import { FC } from "react";
import styled from "styled-components";

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

const App: FC = () => {
    return (
        <Alert>
            <span>Work in progress...</span>
            <span>Check back later</span>
        </Alert>
    )
}

export default App;