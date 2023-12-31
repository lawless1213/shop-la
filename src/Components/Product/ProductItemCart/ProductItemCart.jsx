import { useNavigate } from 'react-router-dom';
import s from './ProductItemCart.module.scss';
import { incrementCount, decrementCount, removeFromCart, toggleWishProduct } from '../../../data/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from "react-rating-stars-component";

const ProductItemCart = (props) => {
	let navigate = useNavigate();
	let dispatch = useDispatch();
	let id = props.product.id;
	let wishlist = useSelector(state => state.cart.wishlist);
	let isWishProduct = wishlist.find(pr => pr.id == id);
	

	const ShowMoreHandler = () => {
		navigate(`/product/${id}`);
	}

	const CreateDiscountPrice = () => {
		let res = (100 + parseInt(props.product.info.discountPercentage))/100 * props.product.info.price;
		return parseInt(res);
	}

	const removeFromCartHandler = () => {
		dispatch(removeFromCart(id));
	}

	const incrementCountHandler = () => {
		dispatch(incrementCount(id));
	}

	const decrementCountHandler = () => {
		dispatch(decrementCount(id));
	}

	const toggleFavoriteHandler = () => {
		dispatch(toggleWishProduct(props.product));
	}

	

	return (
		<div className={s.ProductItemCart}>
			<div className={s.imageWrap} onClick={ShowMoreHandler}>
				<img src={props.product.info.thumbnail} alt={props.product.info.title} />
			</div>
			<div className={s.actions}>
				<button onClick={toggleFavoriteHandler}>
					<span className={`${s.icon} ${isWishProduct ? s.fill : ''} material-symbols-outlined`}>favorite</span>
					<span className={`${s.caption} f-caption`}>Wishlist</span>
				</button>
				<button>
					<span className={`${s.icon} material-symbols-outlined`}>format_list_bulleted</span>
					<span className={`${s.caption} f-caption`}>Compare</span>
				</button>
				<button onClick={removeFromCartHandler}>
					<span className={`${s.icon} ${s.black} material-symbols-outlined`}>close</span>
					<span className={`${s.caption} f-caption`}>Remove</span>
				</button>
			</div>
			<div className={s.info}>
				<div className={`${s.title} f-s5`} onClick={ShowMoreHandler}>{props.product.info.title}</div>
				<div className={`${s.description} f-caption`}>{props.product.info.description}</div>
				<ReactStars
					value={props.product.info.rating}
					count={5}
					edit={false}
					isHalf={true}
					classNames={"rating"}
					activeColor={'#FDBC15'}
					color={'#EBEBEB'}
					emptyIcon={<span className="icon no_fill material-symbols-outlined">grade</span>}
					halfIcon={<span className="icon half material-symbols-outlined">star_half</span>}
					filledIcon={<span className="icon fill material-symbols-outlined">grade</span>}
				/>
				<div className={s.priceWrap}>
					<div className={s.priceBlock}>
						<div className={`${s.price} f-s4`}>{props.product.info.price}USD</div>
						<div className={`${s.oldPrice} f-s6`}>{CreateDiscountPrice()}USD</div>
					</div>
					<div className={s.Counter}>
						<button className="myButton mini transparent" onClick={props.product.count > 1 ? decrementCountHandler : removeFromCartHandler}>-</button>
						<span className={`${s.Count} f-s5`}>{props.product.count}</span>
						<button className='myButton mini transparent' onClick={incrementCountHandler}>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductItemCart;