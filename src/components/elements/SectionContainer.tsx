import { FC } from "react";
import styled, { StyledComponent } from "styled-components";

const BorderWrapper = styled.div<{ name: string, comment?: string, $fit: boolean }>`
    background-color: #0a0d13;
    position: relative;
    flex-grow: ${({ $fit }) => $fit ? "0" : "1"};
    max-width: 100%;

    &::before {
        content: "${({ name }) => name}";
        position: absolute;
        top: 0;
        left: 1rem;
        background-color: #0a0d13;
        padding: 0 0.4rem;
        transform: translateY(-50%);
    }

    ${({ comment }) => comment ? `
        &::after {
            content: "${comment}";
            position: absolute;
            top: 0;
            right: 1rem;
            background-color: #0a0d13;
            padding: 0 0.4rem;
            transform: translateY(-50%);
        }
    ` : ""}
`

export const SectionWrapper = styled.div`
    border-radius: 4px;
    border: 1px solid #dadada;
    width: fit-content;
    height: fit-content;
    width: 100%;
    max-width: 100%;
    padding: 1rem;
    padding-top: 1.2rem;
`;

const SectionContainer: FC<{ name: string, comment?: string, fit?: boolean, style?: StyledComponent<"div", any> }> = ({ name, comment, fit = false, style: Style = SectionWrapper, children }) => {
    return (
        <BorderWrapper $fit={fit} name={name} comment={comment}>
            <Style>
                {children}
            </Style>
        </BorderWrapper>
    )
}

export default SectionContainer;