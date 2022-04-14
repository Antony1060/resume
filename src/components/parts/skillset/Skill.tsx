import { FC } from "react";
import styled from "styled-components";

const Container = styled.div<{ imgHeight: number }>`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.4rem;
    border: 1px dashed #24282e;
    min-height: 50px;
    
    div {
        width: 2.6rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: auto;
            height: ${({ imgHeight }) => imgHeight}rem;
        }
    }

    span {
        font-size: 1rem;
        font-family: "JetBrains Mono", monospace;
    }
`

const Skill: FC<{ name: string, icon: string, imgHeight?: number }> = ({ name, icon, imgHeight = 2 }) => {
    return (
        <Container imgHeight={imgHeight}>
            <div>
                <img src={icon} alt={name} height={`${2 * 16}px`} width="50px" />
            </div>
            <span>{name}</span>
        </Container>
    )
}

export default Skill;