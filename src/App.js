import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/signin/signin.component';
import Contact from './routes/contact/contact.component';
import Navigation from './routes/navigation/navigation.component';
import Cart from './routes/cart/cart.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />           
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Route>     
    </Routes>
    );
}

export default App;
