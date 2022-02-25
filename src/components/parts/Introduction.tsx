import { FC } from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    text-align: center;
`

const Header = styled.span`
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
`

const Divider = styled.div`
    height: 2px;
    background: linear-gradient(0.25turn, #0a0d13, #272b33 4%, #272b33 96%, #0a0d13);
`

const Introduction: FC = () => {
    return (
        <SectionContainer name="Introduction">
            <InnerContainer>
                <Header>
                    <span>👋</span>
                    <span>Hi</span>
                </Header>
                <Divider />
                <span>This page is still very much work in progress</span>
            </InnerContainer>
        </SectionContainer>
    )
}

export default Introduction;