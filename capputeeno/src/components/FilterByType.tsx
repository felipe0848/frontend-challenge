import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/FilterTypes";
import { styled } from "styled-components";

interface FilterItemProps {
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
    color: ${(props) =>
        props.selected
            ? "var(--text-dark-primary)"
            : "var(--text-dark-secondary)"};
    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: ${(props) => (props.selected ? "600" : "400")};
    line-height: 22px;
    text-transform: uppercase;
    cursor: pointer;

    border-bottom: ${(props) =>
        props.selected ? "4px solid var(--orange-low)" : ""};
`;

export default function FilterByType() {
    const { type, setType } = useFilter();

    const handleChange = (value: FilterType) => {
        setType(value);
    };
    return (
        <FilterList>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => handleChange(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>
            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => handleChange(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>
            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => handleChange(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    );
}
