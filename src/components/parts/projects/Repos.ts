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
        description: "x86_64 Linux debugger built on ptrace, with symbol-aware ELF disassembly.",
        language: "C",
        type: "project",
        part: "creator",
    },
    {
        name: "kontestis",
        org: "ItKlubBozoLagan",
        orgDisplay: false,
        description: "Competitive programming platform hosting contests for 1,000+ students.",
        language: "TypeScript",
        type: "website",
        link: "https://kontestis.ac",
        part: "contributor",
    },
    {
        name: "evaluator-v2",
        org: "ItKlubBozoLagan",
        orgDisplay: false,
        description: "Sandboxed Kontestis evaluator with run times reproducible to ±8 ms.",
        language: "Rust",
        type: "project",
        part: "contributor",
    },
    {
        name: "gas-orm",
        description: "Macro-driven Postgres ORM for Rust with typed queries and migrations.",
        language: "Rust",
        type: "library",
        part: "creator",
    },
    {
        name: "resume",
        description: "This website, built in React and prerendered to static HTML.",
        language: "React",
        type: "website",
        link: "https://antony.wiki",
        part: "creator",
    },
];
