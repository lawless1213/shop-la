import { useNavigate } from 'react-router-dom';
import s from './ProductItemDefault.module.scss';
// import { addProductToCart } from '../../../../data/reducer/ShoppingCartReducer';
import { useDispatch } from 'react-redux';
import ReactStars from "react-rating-stars-component";

const ProductItemDefault = (props) => {

	let navigate = useNavigate();
	// let dispatch = useDispatch();

	const ShowMoreHandler = () => {
		navigate(`/product/${props.product.id}`);
	}

	const AddToCartHandler = () => {
		// dispatch(addProductToCart(props.product));
	}

	const CreateDiscountPrice = () => {
		let res = (100 + parseInt(props.product.discountPercentage))/100 * props.product.price;
		return parseInt(res);
	}

	return (
		<div className={s.ProductDefault}>
			<div className={s.imageWrap} onClick={ShowMoreHandler}>
				<img src={props.product.thumbnail} alt={props.product.title} />
				<div className={`${s.myTag} myTag f-s6`}>-{parseInt(props.product.discountPercentage)} %</div>
			</div>
			<div className={s.info}>
				<div className={`${s.title} f-s5`} onClick={ShowMoreHandler}>{props.product.title}</div>
				<div className={`${s.description} f-caption`}>{props.product.description}</div>
				<ReactStars
					value={props.product.rating}
					count={5}
					edit={false}
					isHalf={true}
					classNames={"rating"}
					activeColor={'#151515'}
					color={'#EBEBEB'}
					emptyIcon={<span class="icon no_fill material-symbols-outlined">grade</span>}
					halfIcon={<span class="icon half material-symbols-outlined">star_half</span>}
					filledIcon={<span class="icon fill material-symbols-outlined">grade</span>}
				/>
			</div>
			<div className={s.actions}>
				<div className={s.priceBlock}>
					<div className={`${s.price} f-s4`}>{props.product.price}USD</div>
					<div className={`${s.oldPrice} f-s6`}>{CreateDiscountPrice()}</div>
				</div>
				<button className='myButton small' onClick={AddToCartHandler}>Buy now</button>
			</div>
		</div>
	)
}

export default ProductItemDefault;