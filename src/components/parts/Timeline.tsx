import { FC } from "react";
import { Linkedin } from "react-feather";
import SectionContainer from "../elements/SectionContainer";
import { WhiteLink } from "../elements/WhiteLink";

const Timeline: FC = () => {
    return (
        <SectionContainer name="Timeline" after={<WhiteLink href="https://linkedin.com/in/antony1060" target="_blank"><Linkedin size={20} /></WhiteLink>}>
        </SectionContainer>
    )
}

export default Timeline;