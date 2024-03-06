import { 
    ProductCartContainer,
    Footer,
    Name,
    Price,
} from './product-card.styles';

import { CartItemsContext } from '../../contexts/cart-items.context';

import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartItemsContext);

    const addProductToCart = () => addItemToCart(product);
    
    return(
        <ProductCartContainer>
            <img src={imageUrl} alt={`${{name}}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>                
            </Footer>            
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to Cart</Button>            
        </ProductCartContainer>
    );
}

export default ProductCard;