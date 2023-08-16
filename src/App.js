import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';
import Blog from './Components/Blog/Blog';
import AboutUs from './Components/AboutUs/AboutUs';
import Careers from './Components/Careers/Careers';
import Catalog from './Components/Catalog/Catalog';
import ProductPage from './Components/Product/ProductPage/ProductPage';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/products/*" element={<Catalog/>}/>
        <Route path='/products/:productId' element={<ProductPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
