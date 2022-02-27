import { FC } from "react";
import styled from "styled-components";
import { AcceptedLanguages, languageColor, Repo } from "./Repos";
import { Book, Globe, Code, User, Users } from "react-feather";

const Container = styled.div`
    border-bottom: 1px solid #24282e;
    border-right: 1px solid #24282e;
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        border-bottom: 2px solid #24282e;
    }
`;

const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #161a1f;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem;
    padding-top: 1.2rem;
`;

const Link = styled.a`
    display: flex;
    text-decoration: none;
    color: white;

    &:hover {
        text-decoration: underline;
    }
`;

const RepoLink = styled(Link)`
    color: #c9c9c9;
    border-top: 1px dashed #242424;
    padding: 0.6rem 1rem;
    margin: 0 -1rem -1rem -1rem;
`

const Org = styled.div`
    color: #83868b;
`;

const Body = styled.div`
    padding: 1rem;
    color: #c9c9c9;
    font-family: "JetBrains Mono", monospace;
    flex-grow: 1;
    font-size: 1rem;
    border-bottom: 1px solid #161a1f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

const Bottom = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }
`;

const LanguageColor = styled.div<{ language: AcceptedLanguages }>`
    background-color: ${({ language }) => languageColor(language)};
    width: 10px;
    height: 10px;
    border-radius: 50%;
`

const iconSize = 20;

const RepoCard: FC<{ repo: Repo }> = ({ repo }) => {
    return (
        <Container style={{ fontFamily: "monospace" }}>
            <Title>
                {repo.type === "library" ? <Book size={iconSize} /> : repo.type === "website" ? <Globe size={iconSize} /> : <Code size={iconSize} />}
                <Link href={`https://github.com/${repo.org ?? "antony1060"}/${repo.name}`} target="_blank">
                    <Org>{repo.org ? repo.org + "/" : ""}</Org>
                    <span>{repo.name}</span>
                </Link>
            </Title>
            <Body>
                {repo.description}
                {repo.link && <RepoLink href={repo.link} target="_blank" onClick={(e) => repo.link === "https://antony.wiki" && e.preventDefault()}>{repo.link}</RepoLink>}
            </Body>
            <Bottom>
                <div>
                    <LanguageColor language={repo.language} />
                    {repo.language}
                </div>
                {repo.part === "creator" ? <User size={iconSize} /> : <Users size={iconSize} />}
            </Bottom>
        </Container>
    )
}

export default RepoCard;