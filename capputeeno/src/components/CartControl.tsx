import { useLocalStorage } from "@/hooks/useLocalStorage";
import ShoppingBagIcon from "./ShoppingBagIcon";
import { styled } from "styled-components";

const CartCount = styled.span`
    background-color: var(--delete-color);
    color: #fff;

    font-size: 10px;
    font-weight: 500;

    width: 17px;
<<<<<<< HEAD
    height: 17px;
    border-radius: 100%;
    line-height: 17px;
    text-align: center;
=======

>>>>>>> 454f912 (feat(header): add CartCount)

    position: absolute;
    left: 15px;
    top: 50%;
`;

const Container = styled.div`
    position: relative;
`;

interface CartControlProps {}
export default function CartControl(props: CartControlProps) {
    const { value } = useLocalStorage("cart-items");
    return (
        <Container>
            <ShoppingBagIcon />
            <CartCount>{value.length}</CartCount>
        </Container>
    );
}
