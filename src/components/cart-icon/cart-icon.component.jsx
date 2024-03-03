import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { Fragment, useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart-items.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartItemsContext);

    const toggleCartDropdown = () => {
        setIsCartOpen(!isCartOpen);
    }

    return(
        <Fragment>
            <div className='cart-icon-container' onClick={toggleCartDropdown}>
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>{cartCount}</span>                
            </div>
        </Fragment>
    );
}

export default CartIcon;