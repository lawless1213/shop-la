import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Footer.module.scss';

const Footer = () => {
	let categories = useSelector(state => state.products.categories);


	return (
		<footer className={s.Footer}>
			<div className={s.tags}>
				<div className='f-s4'>Product tags</div>
				<div className={s.tagList}>
				{categories.length ? 
				categories.map(category => <NavLink className='myTag dark' key={category} to= {`/products/categories/${category}`}>{category}</NavLink>) 
				: <div className={`${s.empty_item} f-s4`}>No one item.</div>}
				</div>
			</div>
			<div className={s.Copyright}>
				Copyright © 2023 <Link className='myLink' to="https://github.com/lawless1213">lawless1213</Link>
			</div>
		</footer>
	)
}

export default Footer;