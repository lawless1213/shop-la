import s from './Catalog.module.scss';
import Filter from './Filter/Filter';
import Products from './Products/Products';

const Catalog = () => {
	return (
		<div className={s.Catalog}>
			<Filter/>
			<Products/>
		</div>
	)
}

export default Catalog;