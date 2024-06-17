import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../../App";

type Props = {
    cartItems : CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    return(

    )
}

export default Cart;