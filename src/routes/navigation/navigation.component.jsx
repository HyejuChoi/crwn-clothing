import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartItemsContext } from "../../contexts/cart-items.context";
import './navigation.styles.scss';

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartItemsContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'><CrwnLogo className='logo' /></Link>
                <div className='nav-links-container'>                    
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    { currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                    : <Link className='nav-link' to='/auth'>SIGN IN</Link>
                    }
                    <Link className='nav-link' to='/contact'>CONTACT</Link>
                    <Link className='nav-link' to='/checkout'>CART</Link>
                    <CartIcon />                   
                </div>
                { isCartOpen && <CartDropdown /> }
                
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;