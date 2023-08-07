"use client";
import { styled } from "styled-components";
import FilterByType from "./FilterByType";
import FilterByPriority from "./FIlterByPriority";

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
`;

interface FilterBarProps {}
export default function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType />

            <FilterByPriority />

            {/* <div>paginação</div>  */}
        </FilterContainer>
    );
}
