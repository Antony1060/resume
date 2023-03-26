import { FC } from "react";
import { GitHub } from "react-feather";
import styled from "styled-components";

import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";
import { WhiteLink } from "../../elements/WhiteLink";
import RepoCard from "./RepoCard";
import { Repos } from "./Repos";

const Wrapper = styled(SectionWrapper)`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Repositories: FC = () => {
    return (
        <SectionContainer
            name="Repositories"
            style={Wrapper}
            after={
                <WhiteLink
                    aria-label="GitHub Icon"
                    href="https://github.com/antony1060"
                    target="_blank"
                >
                    <GitHub size={20} />
                </WhiteLink>
            }
        >
            {Repos.map((it) => (
                <RepoCard repo={it} key={it.name} />
            ))}
        </SectionContainer>
    );
};

export default Repositories;
