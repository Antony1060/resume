import { FC } from "react";
import { Linkedin } from "react-feather";
import styled from "styled-components";

import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";
import { WhiteLink } from "../../elements/WhiteLink";
import {
    diffDates,
    Experience,
    ExperienceDates,
    Experiences,
    formatDiff,
    formatExperienceType,
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
    margin-right: 0.4rem;
    border: 1px dashed ${({ $active }) => ($active ? "#55e455aa" : "#363a40")};
    border-top: 0;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;

    @media (max-width: 600px) {
        margin-left: 1rem;
        margin-right: 0.2rem;
    }
`;

const ShowMore = styled.summary`
    margin-left: 2rem;
    margin-right: 0.4rem;
    border: 1px dashed #363a40;
    border-top: 0;
    padding: 0.4rem 0.6rem;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85rem;
    opacity: 0.6;
    cursor: pointer;
    list-style: none;
    user-select: none;

    &::-webkit-details-marker {
        display: none;
    }

    &::before {
        content: "▸ Show more";
    }

    &:hover,
    &:focus-visible {
        opacity: 1;
    }

    @media (max-width: 600px) {
        margin-left: 1rem;
        margin-right: 0.2rem;
    }

    @media print {
        display: none;
    }
`;

const Collapsible = styled.details`
    &[open] > ${ShowMore}::before {
        content: "▾ Show less";
    }

    @media print {
        &::details-content {
            content-visibility: visible;
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

    @media (max-width: 600px) {
        flex-grow: 1;
    }

    @media (max-width: 450px) {
        width: 100%;
    }
`;

// items separated by bullets that disappear when an item wraps to a new line:
// every item draws a leading bullet in the space its negative margin creates,
// and the bullet of an item starting a line falls outside the box and is clipped
const SubDetail = styled.span`
    opacity: 0.6;
    font-size: 0.9rem;
    display: flex;
    flex-wrap: wrap;
    column-gap: calc(1ch + 0.8rem);
    overflow: hidden;

    & > * {
        margin-left: calc(-1ch - 0.8rem);
    }

    & > *::before {
        content: "\\2022";
        display: inline-block;
        width: 1ch;
        margin: 0 0.4rem;
    }
`;

// role title + type/location; one line on wide screens, stacked on narrow ones
const RoleInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 0.4rem;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`;

const RoleTitle = styled.span`
    color: #dfdfdf;
    font-size: 0.9rem;
    flex-shrink: 0;
    max-width: 100%;
`;

const RoleBullet = styled.span`
    opacity: 0.6;
    font-size: 0.9rem;

    @media (max-width: 700px) {
        display: none;
    }
`;

const CompanyLogo = styled.img<{ scale?: number }>`
    width: ${({ scale }) => (scale ?? 1) * 3.4}rem;
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

// small logo shown next to the name on mobile, where the big logos are hidden
const InlineLogo = styled.img`
    display: none;
    height: 1.1rem;
    width: auto;
    border-radius: 3px;
    margin-left: auto;

    @media (max-width: 600px) {
        display: block;
    }
`;

const CompanyHeading = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const CompanyWebsiteLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: white;
    text-decoration-color: transparent;
    width: fit-content;
    transition: all 50ms linear;

    &:hover {
        text-decoration-color: white;
        transition: all 50ms linear;
    }
`;

const DateRangeSubDetail: FC<ExperienceDates> = ({ start, end }) => {
    return (
        <SubDetail>
            <span>
                {formatSimpleDate(start)} - {end ? formatSimpleDate(end) : "Present"}
            </span>
            <span>{formatDiff(diffDates(start, end ?? new Date()))}</span>
        </SubDetail>
    );
};

type Position = Extract<Experience, { positions: unknown }>["positions"][number];

const PositionEntry: FC<{ position: Position }> = ({ position }) => {
    return (
        <PositionContainer $active={!position.end}>
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
                            {position.companyWebsite ? (
                                <CompanyWebsiteLink
                                    target={"_blank"}
                                    href={position.companyWebsite}
                                    rel="noreferrer"
                                    style={{
                                        color: "#dfdfdf",
                                    }}
                                >
                                    {position.company}
                                </CompanyWebsiteLink>
                            ) : (
                                <span>{position.company}</span>
                            )}
                            <span
                                style={{
                                    color: "#ffa65d",
                                    fontSize: "0.7rem",
                                }}
                            >
                                by proxy
                            </span>
                            {position.logo && <InlineLogo src={position.logo} alt="" />}
                        </div>
                    )}
                </span>
                <DateRangeSubDetail start={position.start} end={position.end} />
            </Detail>
            {position.proxy && position.logo && (
                <PositionProxyLogo src={position.logo} alt={position.company + " logo"} />
            )}
        </PositionContainer>
    );
};

// positions of past experiences are collapsed behind a pure-CSS "Show more" toggle
const Positions: FC<{ positions: Position[]; collapsed: boolean }> = ({ positions, collapsed }) => {
    const entries = positions.map((position, index) => (
        <PositionEntry key={index} position={position} />
    ));

    if (!collapsed) return <>{entries}</>;

    return (
        <Collapsible>
            <ShowMore />
            {entries}
        </Collapsible>
    );
};

const CompanyName: FC<{ name: string; website?: string }> = ({ name, website }) => {
    if (!website) return <span>{name}</span>;

    return (
        <CompanyWebsiteLink target="_blank" href={website} rel="noreferrer">
            {name}
        </CompanyWebsiteLink>
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
                    href="https://linkedin.com/in/antoniotrstenjak"
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
                            {it.company ? (
                                <CompanyHeading>
                                    <CompanyName name={it.company} website={it.companyWebsite} />
                                    {it.logo && <InlineLogo src={it.logo} alt="" />}
                                </CompanyHeading>
                            ) : (
                                "title" in it && <span>{it.title}</span>
                            )}
                            <RoleInfo>
                                {it.company && "title" in it && (
                                    <>
                                        <RoleTitle>{it.title}</RoleTitle>
                                        <RoleBullet>&bull;</RoleBullet>
                                    </>
                                )}
                                <SubDetail>
                                    <span>{formatExperienceType(it.type)}</span>
                                    <span style={{ textTransform: "capitalize" }}>
                                        {it.location}
                                    </span>
                                </SubDetail>
                            </RoleInfo>
                            <DateRangeSubDetail start={it.start} end={it.end} />
                        </Detail>
                        {it.logo && (
                            <CompanyLogo
                                src={it.logo}
                                scale={it.logoScale}
                                alt={(it.company ?? "") + " logo"}
                            />
                        )}
                    </MainEntryContainer>
                    {"positions" in it && (
                        <Positions positions={it.positions} collapsed={!!it.end} />
                    )}
                </Entry>
            ))}
        </SectionContainer>
    );
};

export default Timeline;
