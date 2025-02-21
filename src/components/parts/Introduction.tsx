import { FC } from "react";
import { FileText } from "react-feather";
import styled from "styled-components";

import CVUrl from "/docs/cv.pdf";

import SectionContainer, { SectionWrapper } from "../elements/SectionContainer";

const Wrapper = styled(SectionWrapper)`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    @media (max-width: 900px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

const InfoContainer = styled.div`
    background-color: #0d1117;
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
    font-size: 1.1rem;

    &,
    * {
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

const DetailPart = styled.span<{ $mobileFriendly?: boolean }>`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 0.4rem;

    span:first-child {
        color: #dadada;
        font-weight: 600;
        flex-shrink: 0;
    }

    span:last-child,
    a {
        color: #ffd173;
        font-weight: 200;
        flex-shrink: 0;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    ${({ $mobileFriendly }) =>
        $mobileFriendly
            ? `
        @media (max-width: 500px) {
            flex-direction: column;
            gap: 0.4rem;
        }
    `
            : ""}
`;

const Filler = styled.span<{ $mobileFriendly?: boolean }>`
    overflow: hidden;
    white-space: nowrap;
    opacity: 0.2;

    ${({ $mobileFriendly }) =>
        $mobileFriendly
            ? `
        @media (max-width: 500px) {
            display: none;
        }
    `
            : ""}
`;

const Detail: FC<{ name: string; value: string; href?: string; mobileFriendly?: boolean }> = ({
    name,
    value,
    href,
    mobileFriendly,
}) => {
    return (
        <DetailPart $mobileFriendly={mobileFriendly}>
            <span>{name}</span>
            <Filler $mobileFriendly={mobileFriendly}>
                ................................................................
            </Filler>
            {href ? (
                <a href={href} target="_blank" rel="noreferrer">
                    {value}
                </a>
            ) : (
                <span>{value}</span>
            )}
        </DetailPart>
    );
};

const CVButtonContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    color: white;
    text-decoration: none;

    &:hover span {
        text-decoration: underline;
    }
`;

const CVButton: FC = () => {
    return (
        <CVButtonContainer target={"_blankž"} href={CVUrl}>
            <FileText size={16} />
            <span>CV</span>
        </CVButtonContainer>
    );
};

const Introduction: FC = () => {
    return (
        <SectionContainer name="Introduction" style={Wrapper} after={<CVButton />}>
            <InfoContainer>
                <Name>Antonio Fran Trstenjak</Name>
                <DetailContainer>
                    <Detail
                        name="E-Mail"
                        value="antony@antony.red"
                        href="mailto:antony@antony.red"
                    />
                    <Detail
                        name="Linked In"
                        value="/in/antoniotrstenjak"
                        href="https://linkedin.com/in/antoniotrstenjak"
                    />
                    <Detail name="GitHub" value="Antony1060" href="https://github.com/antony1060" />
                    <Detail
                        name="Twitter"
                        value="@AntonyThe1060"
                        href="https://twitter.com/AntonyThe1060"
                    />
                </DetailContainer>
            </InfoContainer>
            <InfoContainer>
                <Name>Languages</Name>
                <DetailContainer>
                    <Detail mobileFriendly name="English" value="Full professional proficiency" />
                    <Detail mobileFriendly name="Croatian" value="Native proficiency" />
                    <Detail mobileFriendly name="German" value="Limited working proficiency" />
                </DetailContainer>
            </InfoContainer>
        </SectionContainer>
    );
};

export default Introduction;
