import { useDispatch, useSelector } from 'react-redux';
import s from './Products.module.scss';
import { setProducts, addProducts, setTotal } from '../../../data/reducers/productsReducer';
import getApiData from '../../../data/api';
import { useEffect, useState } from 'react';
import Preloader from '../../UI/Preloader/Preloader';
import ProductItemDefault from '../../Product/ProductItemDefault/ProductItemDefault';

const Products = () => {
	let products = useSelector(state => state.products.items);
	let total = useSelector(state => state.products.total);
	let dispatch = useDispatch();

	let [loaded, setLoaded] = useState(false);

	let uri = 'products?limit=9'

	useEffect(() => {
		getApiData(uri)
		.then(res => {
			dispatch(setProducts(res.data.products));
			dispatch(setTotal(res.data.total));
			setLoaded(true);
		});
	}, [])

	const LoadMoreHandler = () => {
		getApiData(`products?limit=9&skip=${products.length}`)
		.then(res => {
			dispatch(addProducts(res.data.products));
		});
	}

	return (
		<div className={`${s.Products} ${s.grid}`}>
			{
				loaded ? 
					products.map(product => <ProductItemDefault key={product.id} product={product}/>)
				:
					<Preloader/>
			}
			{
				total !== products.length ? 
					<button className='myButton' onClick={LoadMoreHandler}>
						<div className="caption">Show more products</div>
						<span class="icon material-symbols-outlined">expand_more</span>
					</button>
				:
					''
			}
		</div>
	)
}

export default Products;