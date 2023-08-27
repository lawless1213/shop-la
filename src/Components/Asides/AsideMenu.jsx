import { useDispatch, useSelector } from 'react-redux';
import { toggleAsideState } from '../../data/reducers/settingsReducer';
import { data } from '../../data/data';
import './Aside.scss';
import Logo from '../UI/Logo/Logo';
import { Link, NavLink } from 'react-router-dom';


const Aside = (props) => {
	let asideState = useSelector(state => state.settings.aside);
	let dispatch = useDispatch();

	const menuHandler = () => {
		dispatch(toggleAsideState())
	}

	return (
		<div className={`aside ${props.class} ${asideState ? 'open' : ''}`} onClick={menuHandler}>
			<div className='aside_inner' onClick={e => e.stopPropagation()}>
				<button className='close myLink dark' onClick={menuHandler}>
					<span className="icon material-symbols-outlined">close</span>
				</button>
				<Logo onClick={menuHandler}/>
				<div className="divider line m-12"></div>
				<div className='nav links'>
					<NavLink onClick={menuHandler} className='myLink dark f-lead' to='/products'>
						<span className="icon material-symbols-outlined">dataset</span>
						Catalog
					</NavLink>
					<NavLink onClick={menuHandler} className='myLink dark f-lead' to='/cart'>
						<span className="icon material-symbols-outlined">shopping_cart</span>
						Cart
					</NavLink>
					<NavLink onClick={menuHandler} className='myLink dark f-lead' to='/blog'>
						<span className="icon material-symbols-outlined">post</span>
						Blog
					</NavLink>
					<NavLink onClick={menuHandler} className='myLink dark f-lead' to='/about'>
						<span className="icon material-symbols-outlined">emoji_people</span>
						About Us
					</NavLink>
				</div>
				<div className="divider line m-12"></div>
				<div className='contacts links'>
						<Link className='myLink dark' to={"tel:" + data.contacts.phone}>
							<span className="icon material-symbols-outlined">call</span>
							{data.contacts.phone}
						</Link>
						<Link className='myLink dark' to={"mailto:" + data.contacts.mail}>
							<span className="icon material-symbols-outlined">mail</span>
							{data.contacts.mail}
						</Link>
					</div>
			</div>
		</div>
	)
}

export default Aside;


