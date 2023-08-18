import { useSelector } from 'react-redux';
import Banner from '../Banner/Banner';
import s from './Main.module.scss';
import ProductSection from './ProductSection/ProductSection';
import PostSection from './PostSection/PostSection';

const Main = () => {
	let categories = useSelector(state => state.products.categories);

	return (
		<div className={s.Main}>
			<Banner/>
			<div className={s.Content}>
				{
					categories.slice(1, 3).map(category => <ProductSection key={category} category={category}/>)
				}

				<PostSection/>
				
				{
					categories.slice(4, 6).map(category => <ProductSection key={category} category={category}/>)
				}
			</div>
		</div>
	)
}

export default Main;