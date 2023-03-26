import { FC, MouseEventHandler, ReactNode } from "react";
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

    ${(p) =>
        p.$hideOnPortrait
            ? `
        @media (max-width: 550px) {
            display: none;
        }
    `
            : ""}
`;

const NavbarLink: FC<{ href: string; hideOnPortrait?: boolean; children: ReactNode }> = ({
    href,
    hideOnPortrait = false,
    children,
}) => {
    const onClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        if (`${window.location.protocol}//${window.location.host}` === href) event.preventDefault();
    };

    return (
        <Link href={href} $hideOnPortrait={hideOnPortrait} onClick={onClick}>
            <span>./</span>
            <span>{children}</span>
        </Link>
    );
};

export default NavbarLink;
