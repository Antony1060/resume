import { FC, MouseEventHandler } from "react";
import styled from "styled-components";

const Link = styled.a<{ $hideOnPortrait: boolean }>`
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

    ${p => p.$hideOnPortrait ? `
        @media (max-width: 550px) {
            display: none;
        }
    ` : ""}
`

const NavbarLink: FC<{ href: string, hideOnPortrait?: boolean }> = ({ href, hideOnPortrait = false, children }) => {
    const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        if(`${window.location.protocol}//${window.location.host}` === href)
            e.preventDefault();
    }

    return (
        <Link href={href} $hideOnPortrait={hideOnPortrait} onClick={onClick}>
            <span>./</span>
            <span>{ children }</span>
        </Link>
    )
}

export default NavbarLink;