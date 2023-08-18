import { useDispatch, useSelector } from 'react-redux';
import s from './Blog.module.scss';
import { useEffect, useState } from 'react';
import getApiData from '../../data/api';
import { setPosts, addPosts, setTotal } from '../../data/reducers/blogReducer';
import PostPreview from './PostPreview/PostPreview';
import Preloader from '../UI/Preloader/Preloader';

const Blog = () => {
	let posts = useSelector(state => state.blog.posts);
	let total = useSelector(state => state.blog.total);
	let dispatch = useDispatch();
	let [loaded, setLoaded] = useState(false);
	let limitPosts = 10;
	let uri = `posts?limit=${limitPosts}`; 

	useEffect(() => {
		getApiData(uri)
		.then(res => {
			dispatch(setPosts(res.data.posts));
			dispatch(setTotal(res.data.total));
			setLoaded(true);
		});
	}, [uri])


	const LoadMoreHandler = () => {
		getApiData(`posts?limit=${limitPosts}&skip=${posts.length}`)
		.then(res => {
			dispatch(addPosts(res.data.posts));
		});
	}

	return (
		<div className={s.Blog}>
			{
				loaded ? 
					<div className={`${s.PostGrid} ${s.grid}`}>
						{
							posts.map(post => <PostPreview className='big' key={post.id} post={post}/>)
						}
					</div>
					
				:
					<Preloader/>
			}

			{
				loaded && total !== posts.length ? 
					<button className='myButton' onClick={LoadMoreHandler}>
						<div className="caption">Show more posts</div>
						<span className="icon material-symbols-outlined">expand_more</span>
					</button>
				:
					''
			}
		</div>
	)
}

export default Blog;