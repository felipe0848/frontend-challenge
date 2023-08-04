"use client";
import { styled } from "styled-components";
import FilterByType from "./FilterByType";

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

interface FilterBarProps {}
export default function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType />

            <div>Organizar por \/</div>
            {/* <div>paginação</div>  */}
        </FilterContainer>
    );
}
