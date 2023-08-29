import s from './Catalog.module.scss';
import Products from './Products/Products';
import AsideFilter from '../Asides/AsideFilter';
import { toggleAsideFilterState } from '../../data/reducers/settingsReducer';
import { useDispatch } from 'react-redux';

const Catalog = () => {
	let dispatch = useDispatch();

	const ShowFilterHandler = () => {
		dispatch(toggleAsideFilterState());
	}

	return (
		<div className={s.Catalog}>
			<AsideFilter/>
			
			<button className='myButton transparent' onClick={ShowFilterHandler}>Filter</button>
			<Products/>
		</div>
	)
}

export default Catalog;