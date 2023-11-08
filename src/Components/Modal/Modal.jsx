import { closeModal } from '../../data/reducers/settingsReducer';
import './Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import SuccessOrder from './Popups/SuccessOrder';

const renderSwitch = (param) => {
	switch(param) {
		case 'success-order':
			return <SuccessOrder/>;
		default:
			return 'modal';
	}
}

const Modal = () => {
	let dispatch = useDispatch();
	let modalType = useSelector(state => state.settings.modalType);

	const closeModalHandler = () => {
		dispatch(closeModal());
	}

	return (
		<div className='modal'>
			<div className='overlay' onClick={closeModalHandler}></div>
			{renderSwitch(modalType)}
		</div>
	)
}

export default Modal;