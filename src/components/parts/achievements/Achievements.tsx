import { FC } from "react";
import { Award, Icon, Shield } from "react-feather";
import styled from "styled-components";

import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";

type Achievement = {
    title: string;
    description: string;
    category: string;
    icon: Icon;
};

const AchievementList: Achievement[] = [
    {
        title: "European Cybersecurity Challenge",
        description:
            "Represented Croatia in 2022 (Vienna), 2024 (Turin), 2025 (Warsaw) and 2026 (Bochum).",
        category: "Cybersecurity",
        icon: Shield,
    },
    {
        title: "National project development competition",
        description: "Led a team of 3 to 1st place among 100+ high school projects in Croatia.",
        category: "Software development",
        icon: Award,
    },
];

const Wrapper = styled(SectionWrapper)`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    * {
        font-family: "JetBrains Mono", monospace;
    }
`;

const Entry = styled.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    column-gap: 0.8rem;
    row-gap: 0.3rem;
    align-items: baseline;
    padding: 0.5rem;

    @media (max-width: 600px) {
        grid-template-columns: auto minmax(0, 1fr);
    }
`;

const IconContainer = styled.div`
    grid-row: span 2;
    align-self: start;
    display: flex;
    padding-top: 0.1rem;
    opacity: 0.8;

    @media (max-width: 600px) {
        grid-row: span 3;
    }
`;

const Title = styled.span`
    font-size: 1rem;
`;

const Category = styled.span`
    font-size: 0.9rem;
    opacity: 0.6;
    text-align: right;

    @media (max-width: 600px) {
        grid-column: 2;
        grid-row: 3;
        text-align: left;
    }
`;

const Description = styled.span`
    grid-column: 2 / -1;
    font-size: 0.94rem;
    color: #dfdfdf;
`;

const Achievements: FC = () => {
    return (
        <SectionContainer name="Achievements" style={Wrapper}>
            {AchievementList.map(({ title, description, category, icon: AchievementIcon }) => (
                <Entry key={title}>
                    <IconContainer>
                        <AchievementIcon size={18} />
                    </IconContainer>
                    <Title>{title}</Title>
                    <Category>{category}</Category>
                    <Description>{description}</Description>
                </Entry>
            ))}
        </SectionContainer>
    );
};

export default Achievements;
