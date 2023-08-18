import { useState } from 'react';
import s from './Catalog.module.scss';
import Filter from './Filter/Filter';
import Products from './Products/Products';

const Catalog = () => {
	let [filterShow, setShowFilter] = useState(false);
	const ShowFilterHandler = () => {
		setShowFilter(!filterShow);
	}

	return (
		<div className={s.Catalog}>
			{
				filterShow ?
					<Filter/>
				:
					''
			}
			
			<button className='myButton transparent' onClick={ShowFilterHandler}>Filter</button>
			<Products/>
		</div>
	)
}

export default Catalog;