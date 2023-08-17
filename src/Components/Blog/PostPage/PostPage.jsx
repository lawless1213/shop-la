import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getApiData from "../../../data/api";
import s from './PostPage.module.scss';
import Preloader from "../../UI/Preloader/Preloader";

const PostPage = () => {
	let {postId} = useParams();
	let [loaded, setLoaded] = useState(false);
	let [loadedComments, setLoadedComments] = useState(false);
	let [post, setPost] = useState(0);
	let [comments, setComments] = useState([]);
	
	useEffect(() => {
		getApiData(`posts/${postId}`)
		.then(res => {
			setPost(res.data);
			setLoaded(true);
		}, [])
		getApiData(`posts/${postId}/comments`)
		.then(res => {
			setComments(res.data.comments);
			setLoadedComments(true);
		}, [])
	}, [postId])

	return (
		<div className={s.PostPage}>
				{
					loaded ? 
					<div className={s.PostPageItem}>
						<div className={s.Info}>
							<div className={s.Tags}>
								{
									post.tags.map(tag => <div className={`${s.myTag} myTag f-s6`}>{tag}</div>)
								}
							</div>
							<button className='myLink dark' style={{pointerEvents:'none'}}>
								<span class="icon material-symbols-outlined">favorite</span>
								{
									post.reactions > 0 ?
										<div className="counter f-caption">{post.reactions}</div>
									:
										''
								}
							</button>
						</div>
						<div className={s.Image}>
							{/* <img src="" alt="" /> */}
						</div>
						<div className={`${s.Title} f-s4`}>{post.title}</div>
						<div className={`${s.Body} f-body`}>{post.body}</div>
					</div>
				:
					<Preloader/>
				}
				<div className={s.Comments}>
					<div className='f-s3'>Comments</div>
					{
						loadedComments ? 
							comments.map(comment => <div className={s.Comment}><div className={`${s.User} f-s5`}>{comment.user.username}</div><div className={`${s.Text} f-body`}>{comment.body}</div></div>)
						:
						<Preloader/>
					}
				</div>
		</div>
	)
}

export default PostPage;