import { FC } from "react";
import { FileText, GitHub, Linkedin, Mail } from "react-feather";
import styled from "styled-components";

import CVUrl from "/docs/cv.pdf";

import SectionContainer, { SectionWrapper } from "../elements/SectionContainer";

const Wrapper = styled(SectionWrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    padding: 1.6rem 1.5rem;

    * {
        font-family: "JetBrains Mono", monospace;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 1.4rem 1rem;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Name = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
`;

const Headline = styled.span`
    font-size: 0.95rem;
    color: #ffd173;
`;

const Connector = styled.span`
    color: #dfdfdf;
    font-weight: 200;
    opacity: 0.85;
`;

// Lovable brand gradient preset "Horizontal Cool" (https://lovablebrand.lovable.app/brand/colors)
const Lovable = styled.span`
    color: #b0acfe;
    font-weight: 600;
    background: linear-gradient(
        to right,
        #4f88ff 0%,
        #5185ff 8%,
        #5885ff 17%,
        #6289ff 25%,
        #7491ff 33%,
        #91a0ff 42%,
        #b0acfe 50%,
        #ceaffb 58%,
        #e2a5f2 67%,
        #f388de 75%,
        #fb65c2 83%,
        #fd49a8 92%,
        #fd2980 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const NoWrap = styled.span`
    white-space: nowrap;
`;

const Location = styled.span`
    font-size: 0.9rem;
    opacity: 0.6;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
`;

const IconLink = styled.a`
    display: flex;
    color: white;
    opacity: 0.8;
    transition: opacity 50ms linear;

    &:hover,
    &:focus-visible {
        opacity: 1;
    }
`;

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
        <CVButtonContainer target="_blank" href={CVUrl}>
            <FileText size={16} />
            <span>CV</span>
        </CVButtonContainer>
    );
};

const contacts = [
    { label: "E-Mail", href: "mailto:atrstenjak@has.consulting", Icon: Mail },
    { label: "LinkedIn", href: "https://linkedin.com/in/antoniotrstenjak", Icon: Linkedin },
    { label: "GitHub", href: "https://github.com/antony1060", Icon: GitHub },
];

const Introduction: FC = () => {
    return (
        <SectionContainer name="Introduction" style={Wrapper} after={<CVButton />}>
            <Info>
                <Name>Antonio Fran Trstenjak</Name>
                <Headline>
                    Fullstack Product Engineer{" "}
                    <NoWrap>
                        <Connector>@</Connector> <Lovable>Lovable</Lovable>
                    </NoWrap>
                </Headline>
                <Location>Stockholm, Sweden</Location>
            </Info>
            <Links>
                {contacts.map(({ label, href, Icon }) => (
                    <IconLink
                        key={label}
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noreferrer"
                        aria-label={label}
                        title={label}
                    >
                        <Icon size={20} />
                    </IconLink>
                ))}
            </Links>
        </SectionContainer>
    );
};

export default Introduction;
