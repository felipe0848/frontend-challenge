import { useLocalStorage } from "@/hooks/useLocalStorage";
import ShoppingBagIcon from "./ShoppingBagIcon";

interface CartControlProps {}
export default function CartControl(props: CartControlProps) {
    const { value } = useLocalStorage("cart-items");
    return (
        <div>
            <ShoppingBagIcon />
            {value}
        </div>
    );
}
