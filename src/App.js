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
import PostPage from './Components/Blog/PostPage/PostPage';
import OrderSummary from './Components/Cart/OrderSummary/OrderSummary';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/cart/order-summary" element={<OrderSummary/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        {/* <Route path="/careers" element={<Careers/>}/> */}
        <Route path="/products/*" element={<Catalog/>}/>
        <Route path="/products/categories/:category" element={<Catalog/>}/>
        <Route path="/products/search/:search" element={<Catalog/>}/>
        <Route path='/product/:productId' element={<ProductPage/>}></Route>
        <Route path='/blog/post/:postId' element={<PostPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
