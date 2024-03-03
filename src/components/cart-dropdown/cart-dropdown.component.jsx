import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart-items.context';
import Button from '../button/button.component';
import CartItem from '../cart-items/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartItemsContext); 
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>                
            {cartItems.length 
                ?             
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                : 
                <span>There is no item in the cart</span>
            }            
            </div>
            <Button onClick={()=>{}}>Go to Checkout</Button>
        </div>
    );
}

export default CartDropdown;