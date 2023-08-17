import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		posts: [],
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
		}
	}
})

export const {setPosts, addPosts, setTotal} = blogSlice.actions;
export default blogSlice.reducer;