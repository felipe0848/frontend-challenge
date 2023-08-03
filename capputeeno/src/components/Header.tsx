"use client";
import { styled } from "styled-components";

interface HeaderProps {}

import { Saira_Stencil_One } from "next/font/google";
import SearchBar from "./SearchBar";

const sairaStencil = Saira_Stencil_One({
    weight: ["400"],
    subsets: ["latin"],
});

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 160px;
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    line-height: 150%;
`;

export default function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>capputeeno</Logo>
            <div>
                <SearchBar placeholder="Procurando por algo específico?"></SearchBar>
            </div>
        </TagHeader>
    );
}
