import { FC } from "react";
import styled from "styled-components";

import { monthNames } from "../../../lib/date";
import SectionContainer from "../../elements/SectionContainer";
import { formatSimpleDate } from "../timeline/Experience";

const University = {
    name: "Algebra Bernays University",
    website: "https://www.algebra.hr",
    location: "Zagreb, Croatia",
    degree: "BSc in Software engineering",
    start: new Date(2023, monthNames.indexOf("Sep")),
    end: new Date(2027, monthNames.indexOf("Feb")),
};

const Entry = styled.div`
    padding: 0.5rem;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 1rem;
    row-gap: 0.3rem;

    * {
        font-family: "JetBrains Mono", monospace;
    }

    @media (max-width: 600px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

const Name = styled.a`
    color: white;
    font-size: 1rem;
    text-decoration-color: transparent;
    transition: all 50ms linear;
    width: fit-content;

    &:hover {
        text-decoration-color: white;
    }
`;

const Degree = styled.span`
    color: #dfdfdf;
    font-size: 0.94rem;

    @media (max-width: 600px) {
        order: 1;
    }
`;

const Aside = styled.span`
    font-size: 0.9rem;
    opacity: 0.6;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    gap: 0.4rem;

    @media (max-width: 600px) {
        text-align: left;
        justify-content: flex-start;
        order: 2;
    }
`;

const Dates = styled(Aside)`
    opacity: 1;

    & > span:first-child {
        opacity: 0.6;
    }
`;

const ExpectedTag = styled.span`
    color: #ffa65d;
    font-size: 0.7rem;
`;

const Education: FC = () => {
    const expected = University.end.getTime() > Date.now();

    return (
        <SectionContainer name="Education">
            <Entry>
                <Name target="_blank" href={University.website} rel="noreferrer">
                    {University.name}
                </Name>
                <Dates>
                    <span>
                        {formatSimpleDate(University.start)} - {formatSimpleDate(University.end)}
                    </span>
                    {expected && <ExpectedTag>expected</ExpectedTag>}
                </Dates>
                <Degree>{University.degree}</Degree>
                <Aside>{University.location}</Aside>
            </Entry>
        </SectionContainer>
    );
};

export default Education;
