import { useSelector } from 'react-redux';
import s from './Cart.module.scss';
import Form from './Form/Form';
import Order from './Order/Order';

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
			<Order/>
			
		</div>
	)
}

export default Cart;