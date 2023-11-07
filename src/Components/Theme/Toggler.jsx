import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../data/reducers/settingsReducer';

const TogglerTheme = () => {
	let dispatch = useDispatch();
	

	const toggleThemeHandler = () => {
		dispatch(toggleTheme())
	}

	return (
		<button onClick={toggleThemeHandler} className='myButton transparent'>Toggle theme</button>
	)
}

export default TogglerTheme;