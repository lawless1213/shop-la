import { useDispatch, useSelector } from 'react-redux';


const ModalCart = () => {
	let orders = useSelector(state => state.cart.orders);


	return (
		<div className="order">
			order
		</div>
	)
}

export default ModalCart;