import { FC } from "react";
import styled from "styled-components";
import Image from "next/image"
import NavbarLink from "./NavbarLink";
import logoTransparent from "../../../public/logoTransparent.png"

const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media print {
        display: none;
    }
`;

const NavbarContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 1rem;
    gap: 1rem;
`

const HomeLink = styled.a`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const Logo = styled.div`
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
`

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
`

const Divider = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(0.25turn, #0a0d13, #f0f0f0 10%, #f0f0f0 90%, #0a0d13);
`

const Navbar: FC = () => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo>
                    { /* eslint-disable-next-line @next/next/no-img-element */ }
                    <img style={{ width: "2rem" }} src="https://media.antony.red/logoTransparent.png" alt="Logo" />
                    <HomeLink href="/">~/resume</HomeLink>
                </Logo>
                <LinksContainer>
                    <NavbarLink href="https://antony.wiki" hideOnPortrait>Resume</NavbarLink>
                    <NavbarLink href="https://antony.cloud">Blog</NavbarLink>
                    <NavbarLink href="https://antony.contact">Contact</NavbarLink>
                    <NavbarLink href="https://antony.domains" hideOnMobile>Domains</NavbarLink>
                    <NavbarLink href="https://antony.cash" hideOnMobile>Donate</NavbarLink>
                </LinksContainer>
            </NavbarContent>
            <Divider />
        </NavbarContainer>
    )
}

export default Navbar;