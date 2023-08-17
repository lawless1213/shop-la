import { useNavigate } from 'react-router-dom';
import s from './PostPreview.module.scss';

const PostPreview = ({post}) => {
	let navigate = useNavigate();

	const ShowMoreHandler = () => {
		navigate(`/blog/post/${post.id}`);
	}

	return (
		<div className={s.PostPreview}>
			<div className={s.Image} onClick={ShowMoreHandler}>
				{/* <img src="" alt="" /> */}
			</div>
			<div className={s.Tags}>
				{
					post.tags.map(tag => <div className={`${s.myTag} myTag f-s6`}>{tag}</div>)
				}
			</div>
			<div className={`${s.Title} f-s4`} onClick={ShowMoreHandler}>{post.title}</div>
		</div>
	)
}

export default PostPreview;