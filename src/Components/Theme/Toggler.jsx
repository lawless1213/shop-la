import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../data/reducers/settingsReducer';

const TogglerTheme = (props) => {
	let dispatch = useDispatch();
	
	let themeMode = useSelector(state => state.settings.themeMode);

	const toggleThemeHandler = () => {
		dispatch(toggleTheme())
	}

	return (
		<button className={`togglerTheme ${props.class} ${themeMode}mode`} onClick={toggleThemeHandler}>
			<div class='indicator'>
				<span className='icon material-symbols-outlined'>{ themeMode === 'dark' ? 'dark_mode' : 'light_mode'}</span>
			</div>
		</button>
	)
}

export default TogglerTheme;