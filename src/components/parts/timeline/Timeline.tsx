import { FC } from "react";
import { Linkedin } from "react-feather";
import styled from "styled-components";

import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";
import { WhiteLink } from "../../elements/WhiteLink";
import {
    diffDates,
    ExperienceDates,
    Experiences,
    formatDiff,
    formatSimpleDate,
} from "./Experience";

const Wrapper = styled(SectionWrapper)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Entry = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const MainEntryContainer = styled.div<{ $active: boolean }>`
    border: 1px dashed ${({ $active }) => ($active ? "#55e455aa" : "#24282e")};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

const PositionContainer = styled.div<{ $active: boolean }>`
    margin-left: 2rem;
    border: 1px dashed ${({ $active }) => ($active ? "#55e455aa" : "#363a40")};
    border-top: 0;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;

    @media (max-width: 600px) {
        margin-left: 1rem;
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
`;

const CompanyLogo = styled.img`
    width: 3.4rem;
    border-radius: 4px;

    @media (max-width: 600px) {
        display: none;
    }
`;

const PositionProxyLogo = styled.img`
    width: 2rem;
    border-radius: 4px;

    @media (max-width: 600px) {
        display: none;
    }
`;

const DateRangeSubDetail: FC<ExperienceDates> = ({ start, end }) => {
    return (
        <SubDetail>
            <span>
                {formatSimpleDate(start)} - {end ? formatSimpleDate(end) : "Present"}
            </span>
            <Bullet>&bull;</Bullet>
            <span>{formatDiff(diffDates(start, end ?? new Date()))}</span>
        </SubDetail>
    );
};

const Timeline: FC = () => {
    return (
        <SectionContainer
            name="Timeline"
            style={Wrapper}
            after={
                <WhiteLink
                    aria-label="LinkedIn Icon"
                    href="https://linkedin.com/in/antony1060"
                    target="_blank"
                >
                    <Linkedin size={20} />
                </WhiteLink>
            }
        >
            {Experiences.map((it, index) => (
                <Entry key={index}>
                    <MainEntryContainer $active={!it.end}>
                        <Detail>
                            <span>
                                {"title" in it ? it.title : it.company ?? "Unknown company"}
                            </span>
                            <SubDetail>
                                {it.company && "title" in it && (
                                    <>
                                        <span>{it.company}</span>
                                        <Bullet>&bull;</Bullet>
                                    </>
                                )}
                                <span style={{ textTransform: "capitalize" }}>{it.type}</span>
                                <Bullet>&bull;</Bullet>
                                <span style={{ textTransform: "capitalize" }}>{it.location}</span>
                            </SubDetail>
                            <DateRangeSubDetail start={it.start} end={it.end} />
                        </Detail>
                        {it.logo && (
                            <CompanyLogo src={it.logo} alt={(it.company ?? "") + " logo"} />
                        )}
                    </MainEntryContainer>
                    {"positions" in it &&
                        it.positions.map((position, positionIndex) => (
                            <PositionContainer $active={!position.end} key={positionIndex}>
                                <Detail>
                                    <span style={{ color: "#dfdfdf", fontSize: "0.94rem" }}>
                                        {!position.proxy ? (
                                            position.title
                                        ) : (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "0.4rem",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span>{position.company}</span>
                                                <span
                                                    style={{
                                                        color: "#ffa65d",
                                                        fontSize: "0.7rem",
                                                    }}
                                                >
                                                    by proxy
                                                </span>
                                            </div>
                                        )}
                                    </span>
                                    <DateRangeSubDetail start={position.start} end={position.end} />
                                </Detail>
                                {position.proxy && position.logo && (
                                    <PositionProxyLogo
                                        src={position.logo}
                                        alt={position.company + " logo"}
                                    />
                                )}
                            </PositionContainer>
                        ))}
                </Entry>
            ))}
        </SectionContainer>
    );
};

export default Timeline;
