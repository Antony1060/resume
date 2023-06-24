import { Month, monthNames } from "../../../lib/date";

export type Experience =
    | {
          company?: string;
          companyWebsite?: string;
          logo?: string;
          type:
              | "full-time"
              | "part-time"
              | "self-employed"
              | "freelance"
              | "contract"
              | "internship";
          location: "remote" | string;
          start: Date;
          end?: Date;
      } & (
          | {
                title: string;
            }
          | {
                positions: (
                    | (Pick<Experience, "start" | "end" | "companyWebsite"> & {
                          title: string;
                          proxy?: false;
                      })
                    | (Pick<Experience, "start" | "end" | "logo" | "companyWebsite"> & {
                          company: string;
                      } & {
                          proxy: true;
                      })
                )[];
            }
      );

export type ExperienceDates = Pick<Experience, "start" | "end">;

export const formatSimpleDate = (date: Date) =>
    `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

const monthFromSimple = (month: Month, year: number) => new Date(year, monthNames.indexOf(month));

type Diff = { years: number; months: number };

export const diffDates = (start: Date, end: Date): Diff => {
    const months =
        (end.getFullYear() - start.getFullYear() - 1) * 12 +
        (12 - start.getMonth()) +
        end.getMonth();
    const years = Math.floor(months / 12);

    return { years, months: months % 12 };
};

export const formatDiff = (diff: Diff) => {
    if (diff.years === 0) return `${diff.months} mos`;

    return `${diff.years} yrs, ${diff.months} mos`;
};

const __startEndDateExperienceSortComparator = (a: ExperienceDates, b: ExperienceDates) => {
    if (!!a.end !== !!b.end) return a.end ? 1 : -1;

    return b.start.getTime() - a.start.getTime();
};

export const Experiences: Experience[] = (
    [
        {
            type: "self-employed",
            location: "Sveta Nedelja, Croatia",
            start: monthFromSimple("Oct", 2019),
            title: "Independent Consultant",
        },
        {
            company: "V3X Labs",
            companyWebsite: "https://v3x.company",
            type: "contract",
            logo: "https://media.antony.red/v3x_logo.png",
            location: "remote",
            start: monthFromSimple("Dec", 2021),
            positions: [
                {
                    proxy: false,
                    title: "Research & Development engineer",
                    start: monthFromSimple("Dec", 2021),
                },
                {
                    proxy: false,
                    title: "Project manager - ENS Cards",
                    start: monthFromSimple("Mar", 2023),
                },
                {
                    proxy: true,
                    logo: "https://media.antony.red/ens_mark.png",
                    company: "Ethereum Name Service",
                    companyWebsite: "https://ens.domains",
                    start: monthFromSimple("Jan", 2023),
                },
            ],
        },
        {
            company: "SimpliServers",
            companyWebsite: "https://simpliservers.com",
            logo: "https://media.antony.red/simpliservers.png",
            type: "contract",
            location: "remote",
            start: monthFromSimple("May", 2021),
            end: monthFromSimple("Oct", 2021),
            title: "System Administrator and Developer",
        },
    ] as Experience[]
)
    .map((experience) =>
        "title" in experience
            ? experience
            : {
                  ...experience,
                  positions: experience.positions.sort(__startEndDateExperienceSortComparator),
              }
    )
    .sort(__startEndDateExperienceSortComparator);
