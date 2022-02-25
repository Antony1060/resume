import { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { format } from "../../../lib/date";
import { ContributionLevel, ContributionWeek } from "./GithubCalendar";

const levelToColor = (level: ContributionLevel) => {
    switch(level) {
        case "NONE": return "#272b33";
        case "FIRST_QUARTILE": return "#216e39";
        case "SECOND_QUARTILE": return "#30a14e";
        case "THIRD_QUARTILE": return "#40c463";
        case "FOURTH_QUARTILE": return "#84e995"
    }
}

const Container = styled.div<{ level: ContributionLevel }>`
    height: 10px;
    width: 10px;
    background-color: ${({ level }) => levelToColor(level)};
    border-radius: 1px;
    position: relative;

    &:hover div {
        visibility: visible;
    }
`;

const DayHover = styled.div<{ $flipY: boolean }>`
    position: absolute;
    ${({ $flipY }) => !$flipY ?  "top: calc(-100% - 2rem)" : "bottom: calc(-100% - 2rem)"};
    left: 50%;
    display: flex;
    width: max-content;
    transform: translateX(-50%);
    visibility: hidden;
    background-color: #282c32ee;
    border: 1px solid gray;
    padding: 0.4rem;
    border-radius: 4px;
    text-align: center;
    font-size: 0.9rem;
    z-index: 10;
`;

const CalendarDay: FC<{ day: ContributionWeek["contributionDays"][number] }> = ({ day }) => {
    const ref = useRef<HTMLDivElement>(null);

    // weird shinanigans for positioning the hover box
    useEffect(() => {
        if(!ref?.current) return;
        const element = ref.current;
        const container = element?.parentElement?.parentElement?.parentElement; // element(DayHover) -> Container -> ContainerWeek -> Container
        if(!container) return;

        const leftOverflow = (element.getBoundingClientRect().x + element.clientWidth) - (container.getBoundingClientRect().x + container.clientWidth);
        if(leftOverflow > 0)
            element.style["left"] = `calc(50% - ${leftOverflow}px - 1rem)`;

        const rightOverflow = container.getBoundingClientRect().x - element.getBoundingClientRect().x;
        if(rightOverflow > 0)
            element.style["left"] = `calc(50% + ${rightOverflow}px + 1rem)`;
    }, [ref]);

    return (
        <Container level={day.contributionLevel} key={day.date.toISOString()}>
            <DayHover ref={ref} $flipY={day.weekday < 3}>
                <b>{day.contributionCount} {day.contributionCount === 1 ? "contribution" : "contributions"}</b> on {format(day.date)}
            </DayHover>
        </Container>
    )
}

export default CalendarDay;