import { useDispatch, useSelector } from 'react-redux';
import { toggleAsideFilterState } from '../../data/reducers/settingsReducer';
import './Aside.scss';
import Logo from '../UI/Logo/Logo';


const AsideFilter = (props) => {
	let asideState = useSelector(state => state.settings.asideFilter);
	let dispatch = useDispatch();

	const menuHandler = () => {
		dispatch(toggleAsideFilterState())
	}

	return (
		<div className={`aside ${props.class} ${asideState ? 'open' : ''}`} onClick={menuHandler}>
			<div className='aside_inner' onClick={e => e.stopPropagation()}>
				<button className='close myLink dark' onClick={menuHandler}>
					<span className="icon material-symbols-outlined">close</span>
				</button>
				<Logo onClick={menuHandler}/>
		
			</div>
		</div>
	)
}

export default AsideFilter;


