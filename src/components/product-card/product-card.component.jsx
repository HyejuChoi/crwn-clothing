import './product-card.styles.scss';

import { CartItemsContext } from '../../contexts/cart-items.context';

import Button from '../../components/button/button.component';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartItemsContext);

    const addProductToCart = () => addItemToCart(product);
    
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${{name}}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>                
            </div>            
            <Button onClick={addProductToCart} buttonType='inverted'>Add to Cart</Button>            
        </div>
    );
}

export default ProductCard;