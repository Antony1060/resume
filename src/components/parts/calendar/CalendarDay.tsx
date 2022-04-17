import { debounce } from "debounce";
import { FC, useEffect, useRef, useState } from "react";
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
    ${({ $flipY }) => !$flipY ?  "top" : "bottom"}: calc(-100% - 1.8rem);
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
    const padElement = (el: HTMLElement, container: HTMLElement) => {
        el.style["left"] = `50%`;
        
        const leftOverflow = (el.getBoundingClientRect().x + el.clientWidth) - (container.getBoundingClientRect().x + container.clientWidth);
        if(leftOverflow > 0)
            el.style["left"] = `calc(50% - ${leftOverflow}px - 1.2rem)`;

        const rightOverflow = container.getBoundingClientRect().x - el.getBoundingClientRect().x;
        if(rightOverflow > 0)
            el.style["left"] = `calc(50% + ${rightOverflow}px + 1.2rem)`;
    }

    useEffect(() => {
        if(!ref?.current) return;
        const element = ref.current;
        const container = element?.parentElement?.parentElement?.parentElement; // element(DayHover) -> Container -> ContainerWeek -> Container
        if(!container) return;
        
        padElement(element, container);

        const debounced = debounce(() => padElement(element, container), 600);

        const listener = () => debounced();

        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [ref]);

    return (
        <Container level={day.contributionLevel} key={day.date.toISOString()}>
            <DayHover ref={ref} $flipY={day.weekday < 3}>
                <b>{day.contributionCount} {day.contributionCount === 1 ? "contribution" : "contributions"}</b>&nbsp;on {format(day.date)}
            </DayHover>
        </Container>
    )
}

export default CalendarDay;
