import { useEffect, useState } from "react";
import s from "./ProductPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import getApiData from "../../../data/api";
import { addToCart, incrementCount, decrementCount } from '../../../data/reducers/cartReducer';
import ReactStars from "react-rating-stars-component";
import Preloader from "../../UI/Preloader/Preloader";

const ProductPage = () => {
	let dispatch = useDispatch();
	let {productId} = useParams();
	let [loaded, setLoaded] = useState(false);
	let [product, setProduct] = useState(0);
	let [loadedComments, setLoadedComments] = useState(false);
	let [comments, setComments] = useState([]);

	let products = useSelector(state => state.cart.products);
	let thisProductInCart = products.find(pr => pr.id == productId);
	
	useEffect(() => {
		getApiData(`products/${productId}`)
		.then(res => {
			setProduct(res.data);
			setLoaded(true);
		}, [])
		getApiData(`comments/post/${productId}`)
		.then(res => {
			setComments(res.data.comments);
			setLoadedComments(true);
		}, [])
	}, [productId])

	const AddToCartHandler = () => {
		dispatch(addToCart(product));
	}

	const incrementCountHandler = () => {
		dispatch(incrementCount(product.id));
	}

	const decrementCountHandler = () => {
		dispatch(decrementCount(product.id));
	}

	const CreateDiscountPrice = () => {
		let res = (100 + parseInt(product.discountPercentage))/100 * product.price;
		return parseInt(res);
	}

	return (
		<div className={s.ProductPage}>
			<Link to='/products' className="myLink">Back to catalog</Link>
			{
				loaded ? 
				<div className={s.ProductPageItem}>
					<div className={s.imageWrap}>
						<img src={product.thumbnail} alt={product.title} />
						<div className={`${s.myTag} myTag f-s6`}>-{parseInt(product.discountPercentage)} %</div>
					</div>
					<div className={s.Content}>
						<div className={s.info}>
							<div className={`${s.title} f-s2`} >{product.title}</div>
							<ReactStars
								value={product.rating}
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
							<div className={`${s.description} f-body`}>{product.description}</div>
						</div>
						<div className={s.actions}>
							<div className={s.priceBlock}>
								<div className={`${s.price} f-s2`}>{product.price}USD</div>
								<div className={`${s.oldPrice} f-s5`}>{CreateDiscountPrice()}USD</div>
							</div>
							{
								thisProductInCart ?
									<div className={s.Counter}>
										<button className={`myButton mini transparent ${thisProductInCart.count === 1 ? 'disabled' : ''}`} onClick={decrementCountHandler}>-</button>
										<span className={`${s.Count} f-s5`}>{thisProductInCart.count}</span>
										<button className='myButton mini transparent' onClick={incrementCountHandler}>+</button>
									</div>
								:
									<div className={`${s.Counter} disabled`}>
										<button className='myButton mini transparent disabled'>-</button>
										<span className={`${s.Count} f-s5`}>0</span>
										<button className='myButton mini transparent disabled'>+</button>
									</div>

							}
							<button className='myButton small' onClick={AddToCartHandler}>Buy now</button>
						</div>
					</div>
				</div>
				:
				<Preloader/>
			}
			<div className={s.Comments}>
				<div className='f-s3'>Comments</div>
					{
						loadedComments?
							comments.map(comment => <div key={comment.id} className={s.Comment}><div className={`${s.User} f-s5`}>{comment.user.username}</div><div className={`${s.Text} f-body`}>{comment.body}</div></div>)
						:
							''
						}
			</div>
		</div>
	)
}

export default ProductPage;