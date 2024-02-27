import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'><CrwnLogo className='logo' /></Link>
                <div className='nav-links-container'>                    
                    <Link className='nav-link' to='/shop'><div>SHOP</div></Link>
                    <Link className='nav-link' to='/auth'><div>SIGN IN</div></Link>
                    <Link className='nav-link' to='/register'><div>REGISTER</div></Link>
                    <Link className='nav-link' to='/contact'><div>CONTACT</div></Link>
                    <Link className='nav-link' to='/cart'><div>CART</div></Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;