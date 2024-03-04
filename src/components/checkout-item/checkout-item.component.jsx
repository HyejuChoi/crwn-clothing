import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart-items.context';

import './checkout-item.styles.scss';

const CheckoutItems = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartItemsContext);
    const { name, quantity, imageUrl, price } = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemToCartHandler = () => addItemToCart(cartItem);

    const cartItemTotal = cartItem.quantity * cartItem.price;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'><img src={imageUrl} alt={`${name}`} /></div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>                
            </span>  
            <span className='price'>${price}</span> 
            <span className='price'>${cartItemTotal}</span> 
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>   
        </div>
    );
}

export default CheckoutItems;