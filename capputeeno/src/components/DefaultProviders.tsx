"use client";
import { FilterContextProvider } from "@/context/FilterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode;
}
export default function DefaultProviders({ children }: DefaultProvidersProps) {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>{children}</FilterContextProvider>
        </QueryClientProvider>
    );
}
