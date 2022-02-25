import { FC, useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";
import { format } from "../../lib/date";

type ContributionLevel = "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";

type ContributionWeek = {
    contributionDays: {
        contributionCount: number,
        contributionLevel: ContributionLevel,
        date: Date,
        weekday: number
    }[]
}

const levelToColor = (level: ContributionLevel) => {
    switch(level) {
        case "NONE": return "#272b33";
        case "FIRST_QUARTILE": return "#216e39";
        case "SECOND_QUARTILE": return "#30a14e";
        case "THIRD_QUARTILE": return "#40c463";
        case "FOURTH_QUARTILE": return "#84e995"
    }
}

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: visible;
`;

const Calendar = styled.div`
    background-color: #0a0d13;
    border-radius: 4px;
    border: 1px solid white;
    width: fit-content;
    height: fit-content;
    max-width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: right;
    gap: 4px;
    overflow-x: hidden;

    div:first-child {
        align-self: end;
    }
`;

const CalendarWeek = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const CalendarDay = styled.div<{ level: ContributionLevel }>`
    height: 10px;
    width: 10px;
    background-color: ${({ level }) => levelToColor(level)};
    border-radius: 1px;
    position: relative;

    &:hover div {
        display: block;
    }
`;

const DayHover = styled.div`
    position: absolute;
    top: calc(-100% - 2rem);
    left: 50%;
    display: flex;
    width: max-content;
    transform: translateX(-50%);
    display: none;
    background-color: #282c32ee;
    border: 1px solid gray;
    padding: 0.4rem;
    border-radius: 4px;
    text-align: center;
    font-size: 0.9rem;
    z-index: 10;
`;

const Title = styled.div`
    opacity: 0.8;
    padding: 0.4rem 0.4rem;
    border-bottom: 1px solid #363b46;
`


const GithubCalendar: FC = () => {
    const [ data, setData ] = useState<ContributionWeek[]>([]);

    useEffect(() => {
        axios.get("https://backend.antony.red/about/contact/gh-weeks").then(res => res.data).then((data: Record<string, ContributionWeek> & { status?: number }) => {
            delete data["status"];
            setData((Object.values(data) as ContributionWeek[]).map(it => ({
                contributionDays: it.contributionDays
                                        .map(day => ({ ...day, date: new Date(day.date) }))
                                        .sort((a, b) => a.date.getTime() - b.date.getTime())
            })).sort((a, b) => a.contributionDays[0].date.getTime() - b.contributionDays[0].date.getTime()));
        });
    }, []);

    return (
        <Container>
            <Calendar>
                {!data.length ? "Loading data..." :
                    data.map((week, i) =>
                        <CalendarWeek key={i}>
                            {week.contributionDays.map(day =>
                                <CalendarDay level={day.contributionLevel} key={day.date.toISOString()}>
                                    <DayHover>
                                        <b>{day.contributionCount} {day.contributionCount === 1 ? "contribution" : "contributions"}</b> on {format(day.date)}
                                    </DayHover>
                                </CalendarDay>
                            )}
                        </CalendarWeek>
                    )
                }
            </Calendar>
        </Container>
    )
}

export default GithubCalendar;