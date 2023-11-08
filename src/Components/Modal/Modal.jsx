import { closeModal } from '../../data/reducers/settingsReducer';
import s from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ModalCart from './Sections/ModalCart';

const renderSwitch = (param) => {
	switch(param) {
		case 'order':
			return <ModalCart/>;
		default:
			return 'modal';
	}
}


const Modal = () => {
	let dispatch = useDispatch();
	let modalType = useSelector(state => state.settings.modalType);
	console.log(modalType);

	const closeModalHandler = () => {
		dispatch(closeModal());
	}

	return (
		<div className={s.Modal}>
			<div className={s.Overlay} onClick={closeModalHandler}></div>
			<div className={s.Popup}>
				{renderSwitch(modalType)}
			</div>
		</div>
	)
}

export default Modal;