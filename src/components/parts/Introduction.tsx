import { FC } from "react";
import styled from "styled-components";
import SectionContainer, { SectionWrapper } from "../elements/SectionContainer";

const Wrapper = styled(SectionWrapper)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

const InfoContainer = styled.div`
    background-color: #0d1117;
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
    font-size: 1.1rem;
    
    &, * {
        font-family: "JetBrains Mono", monospace;
    }
`;

const Name = styled.div`
    padding: 0 0 0.8rem 0;
    border-bottom: 1px dotted #dddddd;
    text-align: center;
`;

const DetailContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
    justify-content: center;
`;

const Detail = styled.span<{ $mobileFriendly?: boolean }>`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    span:first-child {
        color: #dadada;
        font-weight: 600;
    }

    span:last-child, a {
        color: #ffd173;
        font-weight: 200;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    ${({ $mobileFriendly }) => $mobileFriendly ? `
        @media (max-width: 500px) {
            flex-direction: column;
            gap: 0.4rem;
        }
    `: ""}
`;

const Introduction: FC = () => {
    return (
        <SectionContainer name="Introduction" style={Wrapper}>
            <InfoContainer>
                <Name>Antonio Fran Štignjedec</Name>
                <DetailContainer>
                    <Detail>
                        <span>E-Mail</span>
                        <a href="mailto:antony@antony.red">antony@antony.red</a>
                    </Detail>
                    <Detail>
                        <span>Linked In</span>
                        <a href="https://linkedin.com/in/antony1060" target="_blank">/in/antony1060</a>
                    </Detail>
                    <Detail>
                        <span>GitHub</span>
                        <a href="https://github.com/antony1060" target="_blank">Antony1060</a>
                    </Detail>
                    <Detail>
                        <span>Twitter</span>
                        <a href="https://twitter.com/@AntonyThe1060" target="_blank">@AntonyThe1060</a>
                    </Detail>
                </DetailContainer>
            </InfoContainer>
            <InfoContainer>
                <Name>Languages</Name>
                <DetailContainer>
                    <Detail $mobileFriendly>
                        <span>English</span>
                        <span>Full professional proficiency</span>
                    </Detail>
                    <Detail $mobileFriendly>
                        <span>Croatian</span>
                        <span>Native proficiency</span>
                    </Detail>
                    <Detail $mobileFriendly>
                        <span>German</span>
                        <span>Limited working proficiency</span>
                    </Detail>
                </DetailContainer>
            </InfoContainer>
        </SectionContainer>
    )
}

export default Introduction;