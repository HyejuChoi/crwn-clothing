import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart-items.context';
import CheckoutItems from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartItemsContext); 

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Subtotal</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>                         
            {cartItems.map((checkoutItem) => (
                    <CheckoutItems key={checkoutItem.id} cartItem={checkoutItem} />
                ))
            }        
            <div className='total'>Total: ${cartTotal}</div>
        </div>
    );
}

export default Checkout;