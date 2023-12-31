import s from './Logo.module.scss';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = (props) => {
	return (
		<Link to='/' className={s.Logo} onClick={props.onClick}>
			<img src={logo} alt="logo"/>
		</Link>
	)
}

export default Logo;