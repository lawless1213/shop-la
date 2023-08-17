import { useDispatch, useSelector } from 'react-redux';
import s from './CartProducts.module.scss';
import ProductItemCart from '../../Product/ProductItemCart/ProductItemCart';

const CartProducts = () => {
	let products = useSelector(state => state.cart.products);
	let  dispatch =  useDispatch();

	return (
		<div className={s.CartProducts}>
			{
				products.length ?
					products.map(product => <ProductItemCart key={product.id} product={product}/>)
				:
					<div className={s.emptyBlock}>Empty cart</div>
			}
		</div>
	)
}

export default CartProducts;