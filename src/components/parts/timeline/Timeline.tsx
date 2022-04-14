import { FC } from "react";
import { Linkedin } from "react-feather";
import styled from "styled-components";
import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";
import { WhiteLink } from "../../elements/WhiteLink";
import { diffDates, Experiences, formatDiff, formatSimpleDate } from "./Experience";

const Wrapper = styled(SectionWrapper)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Entry = styled.div<{ $active: boolean }>`
    border: 1px dashed ${({ $active }) => $active ? "#55e455aa" : "#24282e"};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img {
        height: 3.4rem;
        border-radius: 4px;

        @media (max-width: 600px) {
            display: none;
        }
    }
`;

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;

    * {
        font-family: "JetBrains Mono", monospace;
    }

    @media (max-width: 450px) {
        gap: 0.4rem;
        width: 100%;
    }
`;

const SubDetail = styled.span`
    opacity: 0.6;
    font-size: 0.9rem;
    display: flex;
    gap: 0.4rem;

    @media (max-width: 450px) {
        flex-direction: column;
        gap: 0;
        padding: 0.2rem 0.4rem;
        border: 1px dashed #24282e;
    }
`;

const Bullet = styled.span`
    @media (max-width: 450px) {
        display: none;
    }
`

const Timeline: FC = () => {
    return (
        <SectionContainer name="Timeline" style={Wrapper} after={<WhiteLink aria-label="LinkedIn Icon" href="https://linkedin.com/in/antony1060" target="_blank"><Linkedin size={20} /></WhiteLink>}>
            {Experiences.map(it =>
                <Entry $active={!it.end} key={(it.company ?? "") + it.title}>
                    <Detail>
                        <span>{it.title}</span>
                        <SubDetail>
                            {it.company && <span>{it.company}</span>}
                            {it.company && <Bullet>{it.company && "•"}</Bullet>}
                            <span style={{ textTransform: "capitalize" }}>{it.type}</span>
                            <Bullet>&bull;</Bullet>
                            <span style={{ textTransform: "capitalize" }}>{it.location}</span>
                        </SubDetail>
                        <SubDetail>
                            <span>{formatSimpleDate(it.start)} - {it.end ? formatSimpleDate(it.end) : "Present"}</span>
                            <Bullet>&bull;</Bullet>
                            <span>{formatDiff(diffDates(it.start, it.end ?? new Date()))}</span>
                        </SubDetail>
                    </Detail>
                    {it.logo && <img src={it.logo} alt={(it.company ?? "") + " logo"} />}
                </Entry>
            )}
        </SectionContainer>
    )
}

export default Timeline;