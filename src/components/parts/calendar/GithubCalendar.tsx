import { FC, useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";
import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";

export type ContributionLevel = "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";

export type ContributionWeek = {
    contributionDays: {
        contributionCount: number,
        contributionLevel: ContributionLevel,
        date: Date,
        weekday: number
    }[]
}

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: visible;
`;

const Calendar = styled(SectionWrapper)`
    display: flex;
    justify-content: right;
    align-items: start;
    gap: 4px;
    overflow: hidden;
    text-align: center;
    min-height: 100px;

    div:first-child {
        align-self: end;
    }
`;

const CalendarWeek = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const GithubCalendar: FC = () => {
    const [ data, setData ] = useState<ContributionWeek[]>([]);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        axios.get("https://backend.antony.red/about/contact/gh-weeks").then(res => res.data).then((reqData: Record<string, ContributionWeek> & { status?: number }) => {
            delete reqData["status"];
            setData((Object.values(reqData) as ContributionWeek[]).map(it => ({
                contributionDays: it.contributionDays
                                        .map(day => ({ ...day, date: new Date(day.date) }))
                                        .sort((a, b) => a.date.getTime() - b.date.getTime())
            })).sort((a, b) => a.contributionDays[0].date.getTime() - b.contributionDays[0].date.getTime()));
        });
    }, []);

    useEffect(() => {
        setTotal(data.reduce((acc, curr) => acc + curr.contributionDays.reduce((dAcc, dCurr) => dAcc + dCurr.contributionCount, 0), 0) ?? 0);
    }, [data])

    return (
        <Container className="nojs-disable">
            <SectionContainer name="Contributions in the past year" after={total > 0 ? `${total}` : undefined} fit={!!data.length} style={Calendar}>
                {!data.length ? <span style={{ textAlign: "center", width: "100%" }}>Loading data...</span> :
                    data.map((week, i) =>
                        <CalendarWeek key={i}>
                            {week.contributionDays.map(day => <CalendarDay day={day} key={day.date.toISOString()} />)}
                        </CalendarWeek>
                    )
                }
            </SectionContainer>
        </Container>
    )
}

export default GithubCalendar;