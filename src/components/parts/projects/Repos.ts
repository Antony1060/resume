export type AcceptedLanguages = "TypeScript" | "React" | "C" | "Rust" | "Hackathon";

export const languageColor = (language: AcceptedLanguages) => {
    switch (language) {
        case "TypeScript":
            return "#2b7489";
        case "React":
            return "#61dafb";
        case "C":
            return "#555555";
        case "Rust":
            return "#9a6039";
        case "Hackathon":
            return "#fc5837";
    }
};

export type Repo = {
    name: string;
    org?: string;
    orgDisplay?: boolean;
    description: string;
    language: AcceptedLanguages;
    type: "website" | "library" | "project" | "hackathon";
    link?: string;
    // private repositories link the title to `link` instead of GitHub
    private?: boolean;
    part: "contributor" | "creator";
};

// a great way to limit array size ik
export const Repos: [Repo, Repo, Repo, Repo, Repo, Repo] = [
    {
        name: "AlgoTrade 2026",
        description: "Infrastructure for a 300-person algorithmic trading hackathon.",
        language: "Hackathon",
        type: "hackathon",
        link: "https://algotrade.xfer.hr",
        private: true,
        part: "contributor",
    },
    {
        name: "dbger.c",
        description: "GDB-inspired x86_64 Linux debugger and ELF disassembler.",
        language: "C",
        type: "project",
        part: "creator",
    },
    {
        name: "kontestis",
        org: "ItKlubBozoLagan",
        orgDisplay: false,
        description: "Competitive programming contest platform.",
        language: "TypeScript",
        type: "website",
        link: "https://kontestis.ac",
        part: "contributor",
    },
    {
        name: "evaluator-v2",
        org: "ItKlubBozoLagan",
        orgDisplay: false,
        description:
            "The evaluation engine used on the Kontestis platform handling sandboxing and distribution.",
        language: "Rust",
        type: "project",
        part: "contributor",
    },
    {
        name: "gas-orm",
        description: "Postgres ORM focusing on compile-time safety while heavily using macros.",
        language: "Rust",
        type: "library",
        part: "creator",
    },
    {
        name: "resume",
        description: "My personal resume website written in React, i.e. this website.",
        language: "React",
        type: "website",
        link: "https://antony.wiki",
        part: "creator",
    },
];
