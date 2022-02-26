import { FC } from "react";
import styled from "styled-components";
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
`;

const Education: FC = () => {
    return (
        <SectionContainer name="Education">
            <Container>
                <EducationPoint
                    status="passed"
                    description="Elementary education"
                    detail={{
                        name: "OŠ Malešnica",
                        location: "Zagreb, Croatia",
                        years: 8,
                        progress: { current: 1, total: 1 }
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
                        progress: {
                            current: 13,
                            total: 20
                        }
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