import { useDispatch, useSelector } from 'react-redux';
import PopupHeader from '../PopupHeader';

const SuccessOrder = () => {
	let orders = useSelector(state => state.cart.orders);
	let lastOrder = orders[orders.length - 1];

	return (
		<div className='popup'>
			<PopupHeader title="Thank you for your order"/>
			<div className="content">
				<span className="icon material-symbols-outlined">shopping_cart_checkout</span>
				<div className="title">Details:</div>
				<div className="text">
					<p>First Name: {lastOrder.firstName}</p>
					<p>Last Name: {lastOrder.lastName}</p>
					<p>Email: {lastOrder.email}</p>
					<p>Date of receiving: {lastOrder.date}</p>
				</div>
			</div>
		</div>
	)
}

export default SuccessOrder;