import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart-items.context';
import CheckoutItems from '../../components/checkout-item/checkout-item.component';

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartItemsContext); 

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Subtotal</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>                         
            {cartItems.map((checkoutItem) => (
                    <CheckoutItems key={checkoutItem.id} cartItem={checkoutItem} />
                ))
            }        
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;