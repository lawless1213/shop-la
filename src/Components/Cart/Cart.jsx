import { useSelector } from 'react-redux';
import s from './Cart.module.scss';
import Form from './Form/Form';
import Products from './CartProducts/CartProducts';

const Cart = () => {
	let products = useSelector(state => state.cart.products);

	return (
		<div className={`${s.Cart} ${products.length ? '' : s.empty}`}>
			{
				products.length ?
					<Form/>
				:
					''
			}
			<Products/>
			
		</div>
	)
}

export default Cart;