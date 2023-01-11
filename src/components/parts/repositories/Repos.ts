export type AcceptedLanguages = "TypeScript" | "React" | "Svelte";

export const languageColor = (language: AcceptedLanguages) => {
    switch(language) {
        case "TypeScript": return "#2b7489";
        case "React": return "#61dafb";
        case "Svelte": return "#ff3e00";
    }
}

export type Repo = {
    name: string,
    org?: string,
    description: string,
    language: AcceptedLanguages,
    type: "website" | "library" | null,
    link?: string
    part: "contributor" | "creator"
}

// a great way to limit array size ik
export const Repos: [Repo, Repo, Repo, Repo, Repo, Repo] = [{
    name: "resume",
    description: "My personal resume website written in React. A.K.A. this website.",
    language: "React",
    type: "website",
    link: "https://antony.wiki",
    part: "creator"
}, {
    name: "blog",
    description: "My personal blog.",
    language: "Svelte",
    type: "website",
    link: "https://antony.cloud",
    part: "creator"
}, {
    name: "logger",
    org: "v3xlabs",
    description: "Zero dependency, light-weight, blazing fast customizable logging library.",
    language: "TypeScript",
    type: "library",
    part: "contributor"
}, {
    name: "scyllo",
    org: "v3xlabs",
    description: "The Cassandra/Scylla library you didn't want but got anyways.",
    language: "TypeScript",
    type: "library",
    part: "contributor"
}, {
    name: "cloudflare-domain-info",
    description: "An API for getting and checking all domains registered with a Cloudflare account.",
    language: "TypeScript",
    type: null,
    part: "creator"
}, {
    name: "Fuckcors",
    description: "The app you always needed. No need to worry about pesky CORS rules anymore.",
    language: "TypeScript",
    type: null,
    part: "creator"
}];