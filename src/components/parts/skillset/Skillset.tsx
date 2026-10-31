import { FC } from "react";
import styled from "styled-components";

import BashLogo from "/images/bash.svg";
import CargoLogo from "/images/cargo.png";
import CassandraLogo from "/images/cassandra.webp";
import CppLogo from "/images/cpp.svg";
import DockerLogo from "/images/docker.webp";
import GdbLogo from "/images/gdb.svg";
import GitLogo from "/images/git.webp";
import GithubActionsLogo from "/images/githubactions.svg";
import GoLogo from "/images/golang.svg";
import JavaLogo from "/images/java.svg";
import KubernetesLogo from "/images/kubernetes.svg";
import LinuxLogo from "/images/linux.svg";
import MakeLogo from "/images/make.svg";
import MongoLogo from "/images/mongo.svg";
import MySqlLogo from "/images/mysql.webp";
import PostgresLogo from "/images/postgresql.webp";
import PrometheusLogo from "/images/prometheus.svg";
import PythonLogo from "/images/python.webp";
import QemuLogo from "/images/qemu.svg";
import RedisLogo from "/images/redis.svg";
import RustLogo from "/images/rust.webp";
import ScyllaLogo from "/images/scylla.svg";
import TsLogo from "/images/typescript.webp";
import VimLogo from "/images/vim.svg";

import SectionContainer, { SectionWrapper } from "../../elements/SectionContainer";
import Skill from "./Skill";

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
            <SectionContainer name="Languages" style={SubWrapperFirst}>
                <Skill name="Rust" icon={RustLogo} />
                <Skill name="C/C++" icon={CppLogo} imgHeight={1.8} />
                <Skill name="Go" icon={GoLogo} />
                <Skill name="TypeScript" icon={TsLogo} />
                <Skill name="Python" icon={PythonLogo} />
                <Skill name="Java" icon={JavaLogo} />
            </SectionContainer>
            <SectionContainer name="Tools" style={SubWrapperSecond}>
                <Skill name="Git" icon={GitLogo} imgHeight={1.6} />
                <Skill name="Bash" icon={BashLogo} imgHeight={2} />
                <Skill name="Vim" icon={VimLogo} imgHeight={1.8} />
                <Skill name="GDB" icon={GdbLogo} imgHeight={1.5} />
                <Skill name="Make" icon={MakeLogo} imgHeight={1.8} />
                <Skill name="Cargo" icon={CargoLogo} imgHeight={1.8} />
            </SectionContainer>
            <SectionContainer name="Infrastructure" style={SubWrapperThird}>
                <Skill name="Linux" icon={LinuxLogo} />
                <Skill name="Docker" icon={DockerLogo} imgHeight={1.4} />
                <Skill name="Kubernetes" icon={KubernetesLogo} imgHeight={1.8} />
                <Skill name="QEMU" icon={QemuLogo} imgHeight={1.8} />
                <Skill name="Prometheus" icon={PrometheusLogo} imgHeight={1.7} />
                <Skill name="GH Actions" icon={GithubActionsLogo} imgHeight={1.6} />
            </SectionContainer>
            <SectionContainer name="Databases" style={SubWrapperFourth}>
                <Skill name="PostgreSQL" icon={PostgresLogo} imgHeight={1.8} />
                <Skill name="MySQL" icon={MySqlLogo} imgHeight={1.6} />
                <Skill name="Scylla" icon={ScyllaLogo} imgHeight={1.8} />
                <Skill name="Cassandra" icon={CassandraLogo} imgHeight={1.6} />
                <Skill name="Redis" icon={RedisLogo} imgHeight={1.6} />
                <Skill name="MongoDB" icon={MongoLogo} />
            </SectionContainer>
        </SectionContainer>
    );
};

export default Skillset;
