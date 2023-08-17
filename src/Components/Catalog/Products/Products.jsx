import { useDispatch, useSelector } from 'react-redux';
import s from './Products.module.scss';
import { setProducts, addProducts, setTotal } from '../../../data/reducers/productsReducer';
import getApiData from '../../../data/api';
import { useEffect, useState } from 'react';
import Preloader from '../../UI/Preloader/Preloader';
import ProductItemDefault from '../../Product/ProductItemDefault/ProductItemDefault';
import { useParams } from 'react-router-dom';

const Products = () => {
	let products = useSelector(state => state.products.items);
	let total = useSelector(state => state.products.total);
	let dispatch = useDispatch();
	let {category} = useParams();

	let selectedCategory = category ? category === 'all' ? '' : `/category/${category}` : '';

	let [loaded, setLoaded] = useState(false);
	let limitProducts = 9; 
	let uri = `products${selectedCategory}?limit=${limitProducts}`;

	useEffect(() => {
		getApiData(uri)
		.then(res => {
			setLoaded(false);
			dispatch(setProducts(res.data.products));
			dispatch(setTotal(res.data.total));
			setLoaded(true);
		});
	}, [category])

	const LoadMoreHandler = () => {
		getApiData(`products${selectedCategory}?limit=${limitProducts}&skip=${products.length}`)
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
				loaded && total !== products.length ? 
					<button className='myButton' onClick={LoadMoreHandler}>
						<div className="caption">Show more products</div>
						<span className="icon material-symbols-outlined">expand_more</span>
					</button>
				:
					''
			}
		</div>
	)
}

export default Products;