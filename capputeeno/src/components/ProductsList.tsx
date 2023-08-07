import { useProducts } from "@/hooks/useProducts";

export default function ProductsList() {
    const { data } = useProducts();
    console.log(data);
    return <></>;
}
