import { useDispatch, useSelector } from 'react-redux';
import { toggleAsideFilterState } from '../../data/reducers/settingsReducer';
import './Aside.scss';
import Logo from '../UI/Logo/Logo';
import ReactStars from "react-rating-stars-component";


const AsideFilter = (props) => {
	let asideState = useSelector(state => state.settings.asideFilter);
	let dispatch = useDispatch();

	const menuHandler = () => {
		dispatch(toggleAsideFilterState())
	}

	const filterRatingChanged = (value) => {
		let type = 'rating';
		console.log(`${type}:${value}`);
	}

	return (
		<div className={`aside ${props.class} ${asideState ? 'open' : ''}`} onClick={menuHandler}>
			<div className='aside_inner' onClick={e => e.stopPropagation()}>
				<button className='close myLink dark' onClick={menuHandler}>
					<span className="icon material-symbols-outlined">close</span>
				</button>
				<Logo onClick={menuHandler}/>
				<div className="divider brighter line m-12"></div>
				<div className="group-title f-s3"  style={{textAlign:'center'}}>Filter</div>
				<div className="group-title f-body"  style={{textAlign:'center'}}>(Temporarily not working)</div>
				<form className='form'>
					<div className="form-group">
						<div className="group-title f-s4">Rating</div>
						<div className="group-main">
							<ReactStars
								value={0}
								count={5}
								edit={true}
								onChange={filterRatingChanged}
								classNames={"rating"}
								activeColor={'#FDBC15'}
								color={'#EBEBEB'}
								emptyIcon={<span className="icon no_fill material-symbols-outlined">grade</span>}
								halfIcon={<span className="icon half material-symbols-outlined">star_half</span>}
								filledIcon={<span className="icon fill material-symbols-outlined">grade</span>}
							/>
						</div>
					</div>
					<div className="divider line m-12"></div>
				</form>
				<button className='myButton transparent fluid' style={{marginTop:'auto'}} onClick={menuHandler}>Clear filter</button>
			</div>
		</div>
	)
}

export default AsideFilter;


