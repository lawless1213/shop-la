import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../../data/data';
import s from './Header.module.scss';
import Logo from '../UI/Logo/Logo';
import { setCategories, setSelectCategory } from '../../data/reducers/productsReducer';
import getApiData from '../../data/api';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Header = () => {
	let categories = useSelector(state => state.products.categories);
	let navigate = useNavigate();
	let dispatch = useDispatch();

	useEffect(() => {
		getApiData('products/categories')
		.then(res => {
			dispatch(setCategories(res.data));
		});
	}, [])

	const navigateToHandler = (e) => {
		navigate(`/products/categories/${e.value}`);
	}

	return ( 
		<header className={s.Header}>
			<div className={s.top}>
				<div className={s.links}>
					<Link className='myLink dark' to={"tel:" + data.contacts.phone}>{data.contacts.phone}</Link>
					<Link className='myLink dark' to={"mailto:" + data.contacts.mail}>{data.contacts.mail}</Link>
				</div>
				<div className={s.links}>
					<Link className='myLink' to='/blog'>Blog</Link>
					<Link className='myLink' to='/about'>About Us</Link>
					<Link className='myLink' to='/careers'>Careers</Link>
				</div>
			</div>
			<div className={s.main}>
				<Logo/>
				<Dropdown 
					options={categories} 
					onChange={navigateToHandler} 
					placeholder="All categories" 
					className='dropdown_wrap'
					controlClassName='dropdown'
					placeholderClassName='dropdown_placeholder f-button'
					menuClassName='dropdown_menu'
					arrowClosed={<span class="icon material-symbols-outlined">expand_more</span>}
  				arrowOpen={<span class="icon material-symbols-outlined">expand_less</span>}
				/>
				<div className={s.userPanel}>
					<Link className='myLink' to='/cart'>Cart</Link>
				</div>
			</div>
		</header>
	 )
}

export default Header;