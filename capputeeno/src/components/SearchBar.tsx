import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import SearchIcon from "./SearchIcon";

const PrimaryInput = styled.input`
    font-family: inherit;
    color: var(--text-dark-secondary);
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

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    handleChange: (value: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
    return (
        <InputContainer>
            <PrimaryInput
                onChange={(event) => props.handleChange(event.target.value)}
                {...props}
            />
            <SearchIcon />
        </InputContainer>
    );
}
