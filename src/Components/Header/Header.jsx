import { Link } from 'react-router-dom';
import { data } from '../../data/data';
import s from './Header.module.scss';
import Logo from '../UI/Logo/Logo';

const Header = () => {
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
				<div className={s.userPanel}>
					<Link className='myLink' to='/cart'>Cart</Link>
				</div>
			</div>
			<nav className={s.nav}>
				<Link className='myLink dark' to='/products'>All</Link>
				<Link className='myLink dark' to='/products/Bakery'>Bakery</Link>
				<Link className='myLink dark' to='/products/Phones'>Phones</Link>
				<Link className='myLink dark' to='/products/Bakery'>Bakery</Link>
				<Link className='myLink dark' to='/products/Bakery'>Bakery</Link>
			</nav>
		</header>
	 )
}

export default Header;