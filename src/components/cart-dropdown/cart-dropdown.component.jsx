import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartItemsContext } from '../../contexts/cart-items.context';

import Button from '../button/button.component';
import CartItem from '../cart-items/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartItemsContext); 
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>                
            {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
            }            
            </div>
            <Button onClick={goToCheckoutHandler}>Go to Cart</Button>
        </div>
    );
}

export default CartDropdown;