import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { data } from '../../data/data';
import s from './Header.module.scss';
import Logo from '../UI/Logo/Logo';
import { setCategories } from '../../data/reducers/productsReducer';
import getApiData from '../../data/api';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { toggleAsideState } from '../../data/reducers/settingsReducer';
import AsideMenu from '../Aside/AsideMenu';

const Header = () => {
	let categories = useSelector(state => state.products.categories);
	let products = useSelector(state => state.cart.products);
	let navigate = useNavigate();
	let dispatch = useDispatch();

	const menuHandler = () => {
		dispatch(toggleAsideState())
	}

	useEffect(() => {
		getApiData('products/categories')
		.then(res => {
			dispatch(setCategories(res.data));
		});
	}, [])

	const countProductsHandler = () => {
		let counter = 0;
		products.forEach(product => {
			counter = counter + product.count;
		})

		return parseInt(counter);
	}

	const navigateToHandler = (e) => {
		navigate(`/products/categories/${e.value}`);
	}
	

	return ( 
		<header className={s.Header}>
			<AsideMenu class='only mobile'/>
			<div className={s.top}>
				<div className={s.links}>
					<Link  className='myLink dark' to={"tel:" + data.contacts.phone}>{data.contacts.phone}</Link>
					<Link  className='myLink dark' to={"mailto:" + data.contacts.mail}>{data.contacts.mail}</Link>
				</div>
				<div className={s.links}>
					<NavLink className='myLink' to='/blog'>Blog</NavLink>
					<NavLink className='myLink' to='/about'>About Us</NavLink>
				</div>
			</div>
			<div className={s.main}>
				<Logo/>
				<Routes>
					<Route 
						path='/products/*' 
						element={
							<Dropdown 
							options={categories} 
							onChange={navigateToHandler} 
							placeholder="All categories" 
							className={`${s.headerBtn} dropdown_wrap`}
							controlClassName='dropdown'
							placeholderClassName='dropdown_placeholder f-button'
							menuClassName='dropdown_menu'
							arrowClosed={<span className="icon material-symbols-outlined">expand_more</span>}
							arrowOpen={<span className="icon material-symbols-outlined">expand_less</span>}
						/>
						}
					/>
					<Route path='/' element={<Link className={`${s.headerBtn} myButton transparent big`} to='/products'>Go to catalog</Link>}/>
					<Route path='/blog/*' element={<Link className={`${s.headerBtn} myButton transparent big`} to='/products'>Go to catalog</Link>}/>
				</Routes>
				<div className={s.userPanel}>
					<Link className='myLink dark' to='/cart'>
						<span className="icon material-symbols-outlined">shopping_cart</span>
						{
							countProductsHandler() ?
								<div className="counter f-caption">{countProductsHandler()}</div>
							:
								''
						}
					</Link>
					<button className='myLink dark only mobile' onClick={menuHandler}>
						<span className="icon material-symbols-outlined">menu</span>
					</button>
				</div>
			</div>
		</header>
	 )
}

export default Header;