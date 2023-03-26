import axios from "axios";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";
import CalendarDay from "./CalendarDay";

export type ContributionLevel =
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";

export type ContributionWeek = {
    contributionDays: {
        contributionCount: number;
        contributionLevel: ContributionLevel;
        date: Date;
        weekday: number;
    }[];
};

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: visible;
`;

const Calendar = styled(SectionWrapper)`
    min-height: 100px;
    display: flex;
    text-align: center;
`;

const CalendarWeek = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const PaddingContainer = styled.div`
    display: flex;
    justify-content: right;
    gap: 4px;
    overflow: hidden;

    div:first-child {
        align-self: end;
    }
`;

const GithubCalendar: FC = () => {
    const [data, setData] = useState<ContributionWeek[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios
            .get("https://backend.antony.red/about/contact/gh-weeks")
            .then((response) => response.data)
            .then((requestData: Record<string, ContributionWeek> & { status?: number }) => {
                delete requestData["status"];
                setData(
                    (Object.values(requestData) as ContributionWeek[])
                        .map((it) => ({
                            contributionDays: it.contributionDays
                                .map((day) => ({ ...day, date: new Date(day.date) }))
                                .sort((a, b) => a.date.getTime() - b.date.getTime()),
                        }))
                        .sort(
                            (a, b) =>
                                a.contributionDays[0].date.getTime() -
                                b.contributionDays[0].date.getTime()
                        )
                );
            });
    }, []);

    useEffect(() => {
        setTotal(
            data.reduce(
                (accumulator, current) =>
                    accumulator +
                    current.contributionDays.reduce(
                        (dAccumulator, dCurrent) => dAccumulator + dCurrent.contributionCount,
                        0
                    ),
                0
            ) ?? 0
        );
    }, [data]);

    return (
        <Container className="nojs-disable">
            <SectionContainer
                name="Contributions in the past year"
                after={total > 0 ? `${total}` : undefined}
                fit={data.length > 0}
                style={Calendar}
            >
                {data.length === 0 ? (
                    <span style={{ textAlign: "center", width: "100%", alignSelf: "center" }}>
                        Loading data...
                    </span>
                ) : (
                    <PaddingContainer>
                        {data.map((week, index) => (
                            <CalendarWeek key={index}>
                                {week.contributionDays.map((day) => (
                                    <CalendarDay day={day} key={day.date.toISOString()} />
                                ))}
                            </CalendarWeek>
                        ))}
                    </PaddingContainer>
                )}
            </SectionContainer>
        </Container>
    );
};

export default GithubCalendar;
