"use client";

import styled from "styled-components";
import BackIcon from "../icons/BackIcon";

const ButtonWIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border: none;
    background-color: transparent;
    cursor: pointer;

    color: var(--textos-textos, #617480);
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
`;

export default function ButtonBack() {
    return (
        <ButtonWIcon>
            <BackIcon />
            Voltar
        </ButtonWIcon>
    );
}
