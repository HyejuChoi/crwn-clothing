import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartItemsContext } from '../../contexts/cart-items.context';

import Button from '../button/button.component';
import CartItem from '../cart-items/cart-item.component';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartItemsContext); 
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return(
        <CartDropdownContainer>
            <CartItems>                
            {cartItems.length ? (cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
            ))) : (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }            
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to Cart</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;