import { Link } from 'react-router-dom';
import s from './PostSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import getApiData from '../../../data/api';
import Preloader from '../../UI/Preloader/Preloader';
import PostPreview from '../../Blog/PostPreview/PostPreview';

const PostSection = ({category}) => {
	let [posts, setPosts] = useState([]);
	let [loaded, setLoaded] = useState(false);

	let limitProducts = 4; 
	let uri = `posts?limit=${limitProducts}`;
	let btnLink = `/blog`;

	useEffect(() => {
		getApiData(uri)
		.then(res => {
			setPosts(res.data.posts)
			setLoaded(true);
		});
	}, [category])

	return (
		<div className={s.PostSection}>
			<div className={s.Header}>
				<div className={`${s.Title} f-s4`}>Blog</div>
				<Link className='myButton mini transparent' to={btnLink} >
					<div className="caption">Go to blog</div>
					<span className="icon material-symbols-outlined">arrow_forward_ios</span>
				</Link>
			</div>
			<div className={s.Content}>
				{
					loaded ?
					<Swiper
						className={s.Posts}
						slidesPerView={'auto'}
						spaceBetween={32}
					>
						{
							posts.map(post => <SwiperSlide key={post.id}><PostPreview post={post}/></SwiperSlide>)
						}
					</Swiper>
					:
					<Preloader/>
				}
			</div>
		</div>
	)
}

export default PostSection;