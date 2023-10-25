import { Link, useNavigate } from 'react-router-dom';
import s from './ProductItemDefault.module.scss';
import { addToCart, removeFromCart } from '../../../data/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from "react-rating-stars-component";

const ProductItemDefault = (props) => {
	let products = useSelector(state => state.cart.products);

	let navigate = useNavigate();
	let dispatch = useDispatch();

	const ShowMoreHandler = () => {
		navigate(`/product/${props.product.id}`);
	}

	const AddToCartHandler = () => {
		dispatch(addToCart(props.product));
	}

	const removeFromCartHandler = () => {
		dispatch(removeFromCart(props.product.id));
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
					emptyIcon={<span className="icon no_fill material-symbols-outlined">grade</span>}
					halfIcon={<span className="icon half material-symbols-outlined">star_half</span>}
					filledIcon={<span className="icon fill material-symbols-outlined">grade</span>}
				/>
			</div>
			<div className={s.actions}>
				<div className={s.priceBlock}>
					<div className={`${s.price} f-s4`}>{props.product.price}USD</div>
					<div className={`${s.oldPrice} f-s6`}>{CreateDiscountPrice()}USD</div>
				</div>
				{
					products.find(el => el.id === props.product.id) ?
					<div className={s.actionsBtn}>
						<Link className='myLink dark' to='/cart'>
							<span className="icon fill material-symbols-outlined">shopping_cart</span>
						</Link>
						<button className='myLink dark'>
							<span className="icon material-symbols-outlined" onClick={removeFromCartHandler} style={{color:"red"}}>close</span>
						</button>
					</div>
					:
					<div className={s.actionsBtn}>
						<button className='myLink dark'>
							<span className="icon material-symbols-outlined" onClick={AddToCartHandler}>add_shopping_cart</span>
						</button>
					</div>
				}
			</div>
		</div>
	)
}

export default ProductItemDefault;