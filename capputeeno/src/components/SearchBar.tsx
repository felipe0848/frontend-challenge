import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import SearchIcon from "./SearchIcon";

const PrimaryInput = styled.input`
    font-family: inherit;
    color: var(--text-dark);
    font-weight: 400;
    background-color: var(--secondary-color);

    width: 352px;
    padding: 10px 16px;

    border-radius: 8px;
    border: none;
`;

const InputContainer = styled.div`
    position: relative;
    width: 352px;
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchBar(props: SearchBarProps) {
    return (
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcon />
        </InputContainer>
    );
}