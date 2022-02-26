import { Month, monthNames } from "../../../lib/date";

type Experience = {
    company?: string, //
    logo?: string, //
    type: "full-time" | "part-time" | "self-employed" | "freelance" | "contract" | "internship", //
    location: "remote" | string,
    start: Date,
    end?: Date,
    title: string //
}

export const formatSimpleDate = (date: Date) => `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

const monthFromSimple = (month: Month, year: number) => new Date(`${year}-${monthNames.indexOf(month) + 1}`);

type Diff = { years: number, months: number };

export const diffDates = (start: Date, end: Date): Diff => {
    const years = end.getFullYear() - start.getFullYear();
    const months = years * 12 - end.getMonth() + start.getMonth();
    return { years, months };
}

export const formatDiff = (diff: Diff) => `${diff.years} yrs, ${diff.months} mos`

export const Experiences: Experience[] = [{
    type: "self-employed",
    location: "Sveta Nedelja, Croatia",
    start: monthFromSimple("Oct", 2019),
    title: "Independent Consultent"
}, {
    company: "SimpliServers",
    logo: "https://media.antony.red/simpliservers.png",
    type: "contract",
    location: "remote",
    start: monthFromSimple("May", 2021),
    end: monthFromSimple("Oct", 2022),
    title: "System Administrator and Developer"
}].sort((a, b) => b.start.getTime() - a.start.getTime()).sort((a) => a.end ? 1 : -1) as Experience[];