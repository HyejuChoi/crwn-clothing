import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { Fragment, useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart-items.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartItemsContext);

    const toggleCartDropdown = () => {
        setIsCartOpen(!isCartOpen);
    }

    return(
        <Fragment>
            <div className='cart-icon-container' onClick={toggleCartDropdown}>
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>0</span>                
            </div>
        </Fragment>
    );
}

export default CartIcon;