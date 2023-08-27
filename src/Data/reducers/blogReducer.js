import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		posts: [],
		favoritePosts: [],
		total: 0
	},
	reducers: {
		setPosts(state, action) {
			return {...state, posts: [...action.payload]}
		},
		addPosts(state, action) {
			return {...state, posts: [...state.posts, ...action.payload]}
		},
		setTotal(state, action){
			return {...state, total: action.payload}
		},
		toggleFavoritePost(state, action) {
			let post = action.payload;
			let id = post.id;
			let isFavPost = state.favoritePosts.find(e => e.id === id);

			if(!isFavPost) {
				return {...state, favoritePosts: [...state.favoritePosts, post]}
			} else {
				return {...state, favoritePosts: [...state.favoritePosts.filter(p => p.id !== id)]}
			}
		},
	}
})

export const {setPosts, addPosts, setTotal, toggleFavoritePost} = blogSlice.actions;
export default blogSlice.reducer;