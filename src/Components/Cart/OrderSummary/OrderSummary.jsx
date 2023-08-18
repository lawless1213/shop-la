import { useSelector } from 'react-redux';
import s from './OrderSummary.module.scss';
import Form from '../Form/Form';
import Order from '../Order/Order';

const OrderSummary = () => {
	let products = useSelector(state => state.cart.products);

	return (
		<div className={`${s.OrderSummary} ${products.length ? '' : s.empty}`}>
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

export default OrderSummary;