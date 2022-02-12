import NextLink from "next/link";
import { FC } from "react";
import styled from "styled-components";

const LinkContent = styled.a<{ $hideOnMobile: boolean, $hideOnPortrait: boolean }>`
    display: flex;
    text-decoration: none;
    color: gray;
    cursor: pointer;

    span:nth-child(2) {
        color: rgba(255, 255, 255, 0.8);
    }

    &:hover {
        text-decoration: underline;
    }

    &:hover span:nth-child(2) {
        color: white;
    }

    ${p => p.$hideOnMobile ? `
        @media (max-width: 700px) {
            display: none;
        }
    ` : ""}

    ${p => p.$hideOnPortrait ? `
        @media (max-width: 500px) {
            display: none;
        }
    ` : ""}
`

const NavbarLink: FC<{ href: string, hideOnMobile?: boolean, hideOnPortrait?: boolean }> = ({ href, hideOnMobile = false, hideOnPortrait = false, children }) => {
    return (
        <NextLink href={href} passHref>
            <LinkContent $hideOnMobile={hideOnMobile} $hideOnPortrait={hideOnPortrait}>
                <span>./</span>
                <span>{ children }</span>
            </LinkContent>
        </NextLink>
    )
}

export default NavbarLink;