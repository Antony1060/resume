import { FC } from "react";
import styled, { StyledComponent } from "styled-components";

type StyleArs = { $fit: boolean }

const BorderWrapper = styled.div<{ name: string }>`
    position: relative;
    max-width: 100%;

    &::before {
        content: "${({ name }) => name}";
        position: absolute;
        top: 0;
        left: 0;
        background-color: #0a0d13;
        padding: 0 0.4rem;
        left: 1rem;
        transform: translateY(-50%);
    }
`

export const SectionWrapper = styled.div<StyleArs>`
    background-color: #0a0d13;
    border-radius: 4px;
    border: 1px solid white;
    width: ${({ $fit }) => $fit ? "fit-content" : "100%"};
    height: fit-content;
    max-width: 100%;
    padding: 1rem;
    padding-top: 1.2rem;
`;

const SectionContainer: FC<{ name: string, fit?: boolean, style?: StyledComponent<"div", any, StyleArs> }> = ({ name, fit = false, style: Style = SectionWrapper, children }) => {
    return (
        <BorderWrapper name={name}>
            <Style $fit={fit}>
                {children}
            </Style>
        </BorderWrapper>
    )
}

export default SectionContainer;