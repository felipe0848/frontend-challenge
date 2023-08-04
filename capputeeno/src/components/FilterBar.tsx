"use client";
import { styled } from "styled-components";
import FilterByType from "./FilterByType";

const FilterContainer = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
`;

interface FilterBarProps {}
export default function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType />

            {/* <div>filtro organizar</div>
            <div>paginação</div> */}
        </FilterContainer>
    );
}
