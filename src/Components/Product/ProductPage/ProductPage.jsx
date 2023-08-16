import { useEffect, useState } from "react";
import s from "./ProductPage.module.scss";
// import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import getApiData from "../../../data/api";

const ProductPage = () => {
	// let dispatch = useDispatch();
	let {productId} = useParams();
	let [loaded, setLoaded] = useState(false);
	let [product, setProduct] = useState(0);

	console.log(productId);
	
	useEffect(() => {
		getApiData(`products/${productId}`)
		.then(res => {
			setProduct(res.data);
			setLoaded(true);
		}, [])
	}, [productId])

	const AddToCartHandler = () => {
		// dispatch(addProductToCart(product));
	}

	const CreateDiscountPrice = () => {
		let res = (100 + parseInt(product.discountPercentage))/100 * product.price;
		return parseInt(res);
	}

	return (
		<div className={s.ProductPage}>
			{
				loaded ? 
				<div className={s.ProductPageItem}>
					<div className={s.imageWrap}>
						{
							product.images.map(img => <img src={img} alt={product.title} />)
						}
						<div className={`${s.myTag} myTag f-s6`}>-{parseInt(product.discountPercentage)} %</div>
					</div>
					<div className={s.info}>
						<div className={`${s.title} f-s5`} >{product.title}</div>
						<div className={`${s.description} f-caption`}>{product.description}</div>
					</div>
					<div className={s.actions}>
						<div className={s.priceBlock}>
							<div className={`${s.price} f-s4`}>{product.price}USD</div>
							<div className={`${s.oldPrice} f-s6`}>{CreateDiscountPrice()}</div>
						</div>
						<button className='myButton small' onClick={AddToCartHandler}>Buy now</button>
					</div>
				</div>
				:
				<div className="loading">Loading...</div>
			}
			
		</div>
	)
}

export default ProductPage;