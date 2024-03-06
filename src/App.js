import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import Contact from './routes/contact/contact.component';
import Navigation from './routes/navigation/navigation.component';
import Cart from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />           
        <Route path='/auth' element={<Authentication />} />    
        <Route path='/checkout' element={<Cart />} />
      </Route>     
    </Routes>
    );
}

export default App;
