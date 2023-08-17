import { useSelector } from 'react-redux';
import s from './Order.module.scss';
import ProductItemCart from '../../Product/ProductItemCart/ProductItemCart';
import { Link } from 'react-router-dom';

const Order = () => {
	let products = useSelector(state => state.cart.products);

	const countSumCart = () => {
		let sum = 0;
		products.forEach(product => {
			sum = sum + product.info.price*product.count;
		})

		return parseInt(sum);
	}

	return (
		<div className={s.Order}>
			<div className={`${s.Title} f-s3`}>Order Summary</div>

			<div className={s.CartProducts}>
				{
					products.length ?
						products.map(product => <ProductItemCart key={product.id} product={product}/>)
					:
						<div className={`${s.emptyBlock} f-s4`}>
							<span>Unfortunately, your cart is empty...</span>
							<Link className='myButton big' to='/products'>Go to catalog</Link>
						</div>
				}
			</div>

			<div className={s.Total}>
					<div className={`${s.Title} f-s5`}>Total Order:</div>
					<div className={`${s.Value} f-s3`}>{countSumCart()}USD</div>
				</div>
		</div>
	)
}

export default Order;