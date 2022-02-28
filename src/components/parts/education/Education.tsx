import { FC } from "react";
import { Info } from "react-feather";
import styled from "styled-components";
import { Percent } from "../../../lib/Percent";
import SectionContainer from "../../elements/SectionContainer";
import EducationPoint from "./EducationPoint";

const Container = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    padding: 1rem 2rem;
    padding-bottom: 2.4rem;
`;

export type EducationStatus = "passed" | "active" | "future";

const Connector = styled.div<{ status: EducationStatus }>`
    height: 10px;
    flex-grow: 1;
    margin: 0 -10px;
    background-color: ${({ status }) => status === "passed" ? "#3f5c96" : status === "active" ? "#55e480" : "#272b33"};
    position: relative;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:hover div {
        visibility: visible;
    }
`;

const InfoHover = styled.div`
    position: absolute;
    left: 50%;
    top: calc(-100% - 1.4rem);
    display: flex;
    width: 200px;
    transform: translateX(-50%) translateY(-50%);
    visibility: hidden;
    background-color: #282c32ee;
    border: 1px solid gray;
    padding: 0.4rem;
    border-radius: 4px;
    text-align: center;
    font-size: 0.9rem;
    z-index: 10;

    @media (max-width: 1050px) {
        left: calc(200% + 0.6rem);
        transform: translateX(-100%) translateY(-50%);
    }
`;

const InfoAlert: FC = () => {
    return (
        <InfoContainer>
            <Info size={20} />
            <InfoHover>
                All information is displayed in accordance with the Croatian school system.
            </InfoHover>
        </InfoContainer>
    )
}

const Education: FC = () => {
    return (
        <SectionContainer name="Education" after={<InfoAlert />}>
            <Container>
                <EducationPoint
                    status="passed"
                    description="Elementary education"
                    detail={{
                        name: "OŠ Malešnica",
                        location: "Zagreb, Croatia",
                        years: 8,
                        progress: Percent(1)
                    }}
                />
                <Connector status="passed" />
                <EducationPoint
                    status="active"
                    description="High school"
                    detail={{
                        name: "XIII. Gymnasium",
                        location: "Zagreb, Croatia",
                        years: 4,
                        progress: Percent(65)
                    }}
                />
                <Connector status="future" />
                <EducationPoint
                    status="future"
                    description="College"
                />
            </Container>
        </SectionContainer>
    )
}

export default Education;