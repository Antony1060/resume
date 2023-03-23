import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { isNullish } from "../../../lib/functions";
import { EducationStatus } from "./Education";

const Detail = styled.div<{ status: EducationStatus }>`
    position: absolute;
    top: -0.6rem;
    left: 50%;
    min-width: 160px;
    width: max-content;
    transform: translateX(-50%) translateY(-100%);
    background-color: #282c32ee;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 0.9rem;
    display: none;
    flex-direction: column;
    text-align: left;
    gap: 0.6rem;
    pointer-events: none;

    @media (max-width: 950px) {
        left: ${({ status }) => status === "passed" ? "100%" : status === "future" ? "-100%" : "50%"};
    }
`;

const radarColor = keyframes`
    from {
        background-color: #55e455;
    }

    to {
        background-color: #29964a;
    }
`;

const Container = styled.div<{ status: EducationStatus }>`
    background-color: ${({ status }) => status === "passed" ? "#3f5c96" : status === "active" ? "#29964a" : "#272b33"};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    z-index: 2;
    position: relative;
    animation: ${radarColor} 1.2s ease infinite;
    ${({ status }) => status !== "active" ? "animation: none;" : ""}

    &:hover ${Detail} {
        display: flex;
    }
`;

const radar = keyframes`
    from {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-color: #55e455;
    }

    to {
        top: -20px;
        left: -20px;
        width: calc(100% + 40px);
        height: calc(100% + 40px);
        border-color: #29964a00;
    }
`;

const RadarEffect = styled.div`
    position: absolute;
    border: 4px solid #55e480;
    border-radius: 50%;
    animation: ${radar} 1.2s ease infinite;
    pointer-events: none;
`;

type Alignment = "left" | "center" | "right"

// education level here conveniently corresponds to the point position lol
const Description = styled.div<{ alignment: Alignment }>`
    position: absolute;
    top: calc(100% + 8px);
    width: max-content;
    opacity: 0.6;
    pointer-events: none;
    ${({ alignment }) => alignment === "center" ? `
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    ` : alignment === "left" ? `
        left: 0;
        text-align: left;

        @media (max-width: 600px) {
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            width: fit-content;
        }
    ` : `
        right: 0;
        text-align: right;
    `};
`;

const DetailTitle = styled.span`
    font-size: 1rem;
    padding: 0.6rem;
    border-bottom: 1px dashed gray;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

const Degree = styled.span`
    font-size: 0.9rem;
    opacity: 0.8;
`

const Location = styled.span`
    font-size: 0.8rem;
    opacity: 0.6;
`

const DetailContent = styled.div`
    padding: 0.6rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

const Progress = styled.div`
    position: relative;
    width: 100%;
    height: 6px;
    border-radius: 2px;
    background-color: #16191f;
    overflow: hidden;
`;

const ProgressBar = styled.div<{ value: number }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ value }) => value}%;
    background-color: #6b87be;
`;

const ProgressIndicator = styled.span`
    color: lightgreen;
`;

type EducationDetail = {
    name: string,
    location: string,
    years: number,
    degree?: "Bachelors" | "Masters" | "PhD"
    progress: number,
}

type EducationPointProps = {
    status: EducationStatus,
    description: string,
    detail?: EducationDetail,
    descriptionAlignment?: Alignment,
    uncertaint?: boolean
}

const EducationPoint: FC<EducationPointProps> = ({ status, description, detail, descriptionAlignment, uncertaint }) => {
    const progressPercent = detail ? detail.progress * 100 : undefined;

    return (
        <Container status={status}>
            {status === "active" && <RadarEffect />}
            <Description alignment={descriptionAlignment ?? "center"}>{description}</Description>
            <Detail status={status}>
                {!detail || isNullish(progressPercent) || uncertaint ?
                    <span style={{ padding: "0.6rem", textAlign: "center", fontSize: "1rem" }}>Unknown so far...</span>
                :
                    <>
                        <DetailTitle>
                            <span>{detail.name}</span>
                            {detail.degree && <Degree>{detail.degree}</Degree>}
                            <Location>{detail.location}</Location>
                        </DetailTitle>
                        <DetailContent>
                            <div>
                                <ProgressIndicator>{progressPercent !== 100 ? progressPercent + "% done" : "Completed"} </ProgressIndicator>
                                <span>{detail.years} years</span>
                            </div>
                            <Progress>
                                <ProgressBar value={progressPercent} />
                            </Progress>
                        </DetailContent>
                    </>
                }
            </Detail>
        </Container>
    )
}

export default EducationPoint;
