"use client";
import { ProductsFetchResponse } from "@/types/ProductsFetchResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/FilterTypes";
import { GetCategoryByType } from "@/utils/GetCategoryByType";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, { query });
};

const monutQuery = (type: FilterType) => {
    if (type === FilterType.ALL)
        return `query{
        allProducts {
          id
          name
          image_url
          price_in_cents
        }
      }
    `;
    else
        return `query{
        allProducts (filter:{category: "${GetCategoryByType(type)}"}){
          id
          name
          image_url
          price_in_cents
          category
        }
      }`;
};

export function useProducts() {
    const { type } = useFilter();
    const query = monutQuery(type);
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ["products", type],
    });
    return { data: data?.data?.data?.allProducts };
}
