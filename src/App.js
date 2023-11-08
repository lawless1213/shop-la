import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';
import Blog from './Components/Blog/Blog';
import AboutUs from './Components/AboutUs/AboutUs';
import Catalog from './Components/Catalog/Catalog';
import ProductPage from './Components/Product/ProductPage/ProductPage';
import PostPage from './Components/Blog/PostPage/PostPage';
import OrderSummary from './Components/Cart/OrderSummary/OrderSummary';
import Modal from './Components/Modal/Modal';

function App() {
	let themeMode = useSelector(state => state.settings.themeMode);
	let asideState = useSelector(state => state.settings.aside);
	let modalState = useSelector(state => state.settings.modal);

  return (
    <div className={`App${asideState ? ' aside_open' : ''}`} data-theme={themeMode}>
      <div className='container'>
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
        <Footer/>
        { modalState ? 
          <Modal/>
         : 
         ''
        }
        
      </div>
    </div>
  );
}

export default App;
