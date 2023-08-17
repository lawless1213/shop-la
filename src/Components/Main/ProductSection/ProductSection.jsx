import { Link } from 'react-router-dom';
import s from './ProductSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css';
import { useEffect, useState } from 'react';
import getApiData from '../../../data/api';
import Preloader from '../../UI/Preloader/Preloader';
import ProductItemDefault from '../../Product/ProductItemDefault/ProductItemDefault';

const ProductSection = ({category}) => {
	let [products, setProducts] = useState([]);
	let [loaded, setLoaded] = useState(false);

	let limitProducts = 4; 
	let uri = `products/category/${category}?limit=${limitProducts}`;
	let btnLink = `/products/categories/${category}`;

	useEffect(() => {
		getApiData(uri)
		.then(res => {
			setProducts(res.data.products)
			setLoaded(true);
		});
	}, [category])

	return (
		<div className={s.ProductSection}>
			<div className={s.Header}>
				<div className={`${s.Title} f-s4`}>{category}</div>
				<Link className='myButton mini transparent' to={btnLink} >
					<div className="caption">More {category}</div>
					<span class="icon material-symbols-outlined">arrow_forward_ios</span>
				</Link>
			</div>
			<div className={s.Content}>
				{
					loaded ?
					<Swiper
						className={s.Products}
						slidesPerView={'auto'}
						spaceBetween={32}
					>
						{
							products.map(product => <SwiperSlide><ProductItemDefault product={product}/></SwiperSlide>)
						}
					</Swiper>
					:
					<Preloader/>
				}
			</div>
		</div>
	)
}

export default ProductSection;