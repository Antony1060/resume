import ENSLogo from "/images/ens_mark.png";
import LovableLogo from "/images/lovable.svg";
import SimpliServersLogo from "/images/simpliservers.png";
import V3XLogo from "/images/v3x_logo.png";

import { Month, monthNames } from "../../../lib/date";

export type Experience =
    | {
          company?: string;
          companyWebsite?: string;
          logoScale?: number;
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
    if (diff.years === 0) return `${Math.max(1, diff.months)} mos`;

    if (diff.months === 0) return `${diff.years} yrs`;

    return `${diff.years} yrs, ${diff.months} mos`;
};

const __startEndDateExperienceSortComparator = (a: ExperienceDates, b: ExperienceDates) => {
    if (!!a.end !== !!b.end) return a.end ? 1 : -1;

    return b.start.getTime() - a.start.getTime();
};

export const formatExperienceType = (type: Experience["type"]): string => {
    switch (type) {
        case "contract":
            return "Contract";
        case "freelance":
            return "Freelance";
        case "internship":
            return "Internship";
        case "full-time":
            return "Full time";
        case "part-time":
            return "Part tiem";
        case "self-employed":
            return "Self-employed";
    }
};

export const Experiences: Experience[] = (
    [
        {
            company: "Lovable",
            companyWebsite: "https://lovable.dev",
            type: "full-time",
            logo: LovableLogo,
            logoScale: 0.8,
            location: "Stockholm, Sweden",
            start: monthFromSimple("Jul", 2026),
            positions: [
                {
                    title: "Fullstack Product Engineer",
                    start: monthFromSimple("Jul", 2026),
                },
            ],
        },
        {
            company: "V3X Labs",
            companyWebsite: "https://v3x.company",
            type: "contract",
            logo: V3XLogo,
            location: "remote",
            start: monthFromSimple("Dec", 2021),
            end: monthFromSimple("Mar", 2024),
            positions: [
                {
                    title: "Research & Development engineer",
                    start: monthFromSimple("Dec", 2021),
                    end: monthFromSimple("Mar", 2024),
                },
                {
                    title: "Team lead - ENS Cards",
                    start: monthFromSimple("Mar", 2023),
                    end: monthFromSimple("Mar", 2024),
                },
                {
                    proxy: true,
                    logo: ENSLogo,
                    company: "Ethereum Name Service",
                    companyWebsite: "https://ens.domains",
                    start: monthFromSimple("Jan", 2023),
                    end: monthFromSimple("Mar", 2024),
                },
            ],
        },
        {
            company: "SimpliServers",
            companyWebsite: "https://simpliservers.com",
            logo: SimpliServersLogo,
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
