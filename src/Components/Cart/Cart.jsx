import { useSelector } from 'react-redux';
import s from './Cart.module.scss';
import Form from './Form/Form';
import Order from './Order/Order';
import { Link } from 'react-router-dom';

const Cart = () => {
	let products = useSelector(state => state.cart.products);

	return (
		<div className={`${s.Cart} ${products.length ? '' : s.empty}`}>
			<Order/>
			{
				products.length ?
					<Link to="/cart/order-summary" className='myButton transparent'>Go to Checkout</Link>
				:
					''
			}
		</div>
	)
}

export default Cart;