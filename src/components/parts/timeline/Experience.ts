import { Month, monthNames } from "../../../lib/date";

type Experience = {
    company?: string,
    logo?: string,
    type: "full-time" | "part-time" | "self-employed" | "freelance" | "contract" | "internship",
    location: "remote" | string,
    start: Date,
    end?: Date,
    title: string
}

export const formatSimpleDate = (date: Date) => `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

const monthFromSimple = (month: Month, year: number) => new Date(`${year}-${monthNames.indexOf(month) + 1}`);

type Diff = { years: number, months: number };

export const diffDates = (start: Date, end: Date): Diff => {
    const months = (end.getFullYear() - start.getFullYear() - 1) * 12 + (12 - start.getMonth()) + end.getMonth();
    const years = Math.floor(months / 12);
    return { years, months: months % 12 };
}

export const formatDiff = (diff: Diff) => {
    if(diff.years === 0)
        return `${diff.months} mos`;

    return `${diff.years} yrs, ${diff.months} mos`;
}

<<<<<<< HEAD
export const Experiences: Experience[] = (() => ([
        {
            company: "V3X Labs",
            type: "part-time",
            logo: "https://media.antony.red/v3x_logo.png",
            location: "remote",
            start: monthFromSimple("Dec", 2021),
            title: "Research & Development engineer"
        },
        {
            type: "self-employed",
            location: "Sveta Nedelja, Croatia",
            start: monthFromSimple("Oct", 2019),
            title: "Independent Consultant"
        },
        {
            company: "SimpliServers",
            logo: "https://media.antony.red/simpliservers.png",
            type: "contract",
            location: "remote",
            start: monthFromSimple("May", 2021),
            end: monthFromSimple("Oct", 2021),
            title: "System Administrator and Developer"
        }
    ] as Experience[])
        .sort((a, b) => b.start.getTime() - a.start.getTime()).sort((a) => a.end ? 1 : -1)
)()
=======
export const Experiences: Experience[] = [{
    type: "self-employed",
    location: "Sveta Nedelja, Croatia",
    start: monthFromSimple("Oct", 2019),
    title: "Independent Consultant"
}, {
    company: "SimpliServers",
    logo: "https://media.antony.red/simpliservers.png",
    type: "contract",
    location: "remote",
    start: monthFromSimple("May", 2021),
    end: monthFromSimple("Oct", 2021),
    title: "System Administrator and Developer"
}].sort((a, b) => b.start.getTime() - a.start.getTime()).sort((a) => a.end ? 1 : -1) as Experience[];
>>>>>>> 4c38ed6 (Remove random comment)
