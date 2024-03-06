import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart-items.context';

import { 
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton, } from './checkout-item.styles';

const CheckoutItems = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartItemsContext);
    const { name, quantity, imageUrl, price } = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemToCartHandler = () => addItemToCart(cartItem);

    const cartItemTotal = cartItem.quantity * cartItem.price;
    return (
        <CheckoutItemContainer>
            <ImageContainer><img src={imageUrl} alt={`${name}`} /></ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow className='arrow' onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>                
            </Quantity>  
            <BaseSpan>${price}</BaseSpan> 
            <BaseSpan>${cartItemTotal}</BaseSpan> 
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>   
        </CheckoutItemContainer>
    );
}

export default CheckoutItems;