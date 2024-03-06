import { Fragment, useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart-items.context';

import { CartIconContainer, ItemCount, CartIconSvg } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartItemsContext);

    const toggleCartDropdown = () => {
        setIsCartOpen(!isCartOpen);
    }

    return(
        <Fragment>
            <CartIconContainer onClick={toggleCartDropdown}>
                <CartIconSvg />
                <ItemCount>{cartCount}</ItemCount>                
            </CartIconContainer>
        </Fragment>
    );
}

export default CartIcon;