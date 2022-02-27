import { FC } from "react";
import styled from "styled-components";
import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";
import Skill from "./Skill";
import JsLogo from "/images/javascript.png";
import TsLogo from "/images/typescript.png";
import JavaLogo from "/images/java.svg";
import KotlinLogo from "/images/kotlin.png";
import PythonLogo from "/images/python.png";
import GoLogo from "/images/golang.svg";
import MySqlLogo from "/images/mysql.png";
import MongoLogo from "/images/mongo.svg";
import CassandraLogo from "/images/cassandra.png";
import ScyllaLogo from "/images/scylla.svg";
import RedisLogo from "/images/redis.svg";
import GitLogo from "/images/git.png";
import YarnLogo from "/images/yarn.svg";
import GradleLogo from "/images/gradle.svg";
import DockerLogo from "/images/docker.png";
import BashLogo from "/images/bash.svg";
import ParcelLogo from "/images/parcel.png";
import ReactLogo from "/images/react.svg";
import VueLogo from "/images/vue.png";
import SvelteLogo from "/images/svelte.svg";
import KubernetesLogo from "/images/kubernetes.svg";
import NodeLogo from "/images/nodejs.png";
import SassLogo from "/images/sass.png";

const Wrapper = styled(SectionWrapper)`
    padding-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;

const SubWrapper = styled(SectionWrapper)`
    display: flex;
    flex-direction: column;
    height: 100%;

    gap: 0.4rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
`;

// very messy, I know
const SubWrapperFirst = styled(SubWrapper)`
    border-radius: 4px 0 0 4px;
    border-right: none;

    @media (max-width: 850px) {
        border-radius: 4px 0 0 0;
        border-bottom: none;
    }

    @media (max-width: 600px) {
        border-radius: 4px 4px 0 0;
        border-right: 1px solid #dadada;
        border-bottom: none;
    }
`;

const SubWrapperSecond = styled(SubWrapper)`
    border-radius: 0;
    border-right: none;

    @media (max-width: 850px) {
        border-radius: 0 4px 0 0;
        border-right: 1px solid #dadada;
        border-bottom: none;
    }

    @media (max-width: 600px) {
        border-radius: 0;
        border-bottom: none;
    }
`;

const SubWrapperThird = styled(SubWrapper)`
    border-radius: 0;
    border-right: none;

    @media (max-width: 850px) {
        border-radius: 0 0 0 4px;
    }

    @media (max-width: 600px) {
        border-radius: 0;
        border-right: 1px solid #dadada;
        border-bottom: none;
    }
`;

const SubWrapperFourth = styled(SubWrapper)`
    border-radius: 0 4px 4px 0;

    @media (max-width: 850px) {
        border-radius: 0 0 4px 0;
    }

    @media (max-width: 600px) {
        border-radius: 0 0 4px 4px;
    }
`;

const Skillset: FC = () => {
    return (
        <SectionContainer name="Skill set" style={Wrapper}>
            <SectionContainer name="Technologies" style={SubWrapperFirst}>
                <Skill name="React" icon={ReactLogo} />
                <Skill name="Vue" icon={VueLogo} />
                <Skill name="Svelte" icon={SvelteLogo} />
                <Skill name="Kubernetes" icon={KubernetesLogo} imgHeight={1.8} />
                <Skill name="NodeJS" icon={NodeLogo} imgHeight={1.8} />
                <Skill name="SCSS" icon={SassLogo} imgHeight={1.6} />
            </SectionContainer>
            <SectionContainer name="Tools" style={SubWrapperSecond}>
                <Skill name="Git" icon={GitLogo} imgHeight={1.6} />
                <Skill name="Yarn" icon={YarnLogo} imgHeight={1.8} />
                <Skill name="Gradle" icon={GradleLogo} imgHeight={1.4} />
                <Skill name="Docker" icon={DockerLogo} imgHeight={1.4} />
                <Skill name="Bash" icon={BashLogo} imgHeight={2} />
                <Skill name="Parcel" icon={ParcelLogo} imgHeight={1.6} />
            </SectionContainer>
            <SectionContainer name="Languages" style={SubWrapperThird}>
                <Skill name="JavaScript" icon={JsLogo} />
                <Skill name="TypeScript" icon={TsLogo} />
                <Skill name="Java" icon={JavaLogo} />
                <Skill name="Kotlin" icon={KotlinLogo} />
                <Skill name="Python" icon={PythonLogo} />
                <Skill name="Go" icon={GoLogo} />
            </SectionContainer>
            <SectionContainer name="Databases" style={SubWrapperFourth}>
                <Skill name="MySQL" icon={MySqlLogo} imgHeight={1.6} />
                <Skill name="Scylla" icon={ScyllaLogo} imgHeight={1.8} />
                <Skill name="Cassandra" icon={CassandraLogo} imgHeight={1.6} />
                <Skill name="Redis" icon={RedisLogo} imgHeight={1.6} />
                <Skill name="MongoDB" icon={MongoLogo} />
            </SectionContainer>
        </SectionContainer>
    )
}

export default Skillset;