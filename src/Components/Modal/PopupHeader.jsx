import { closeModal } from '../../data/reducers/settingsReducer';
import { useDispatch } from 'react-redux';


const PopupHeader = (props) => {
	let dispatch = useDispatch();

	const closeModalHandler = () => {
		dispatch(closeModal());
	}

	return (
		<div className="header">
			<div className="title">{props.title}</div>
			<button className='myLink dark close_modal' onClick={closeModalHandler}>
			<span className="icon material-symbols-outlined close_modal">close</span>
			</button>
			
		</div>
	)
}

export default PopupHeader;