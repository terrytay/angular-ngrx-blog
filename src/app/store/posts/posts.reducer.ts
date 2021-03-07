import {createReducer, on } from "@ngrx/store";
import { Post } from "src/app/posts/models/posts.model";
import {addPost, removePost, loadPostsSuccess} from './posts.actions';

export const initialState: Post[] = [];

export const postsReducer = createReducer(
  initialState,
  on(addPost, (state, { post }) => [...state, post]),
  on(removePost, (state, { postId }) => state.filter(post => post.id !== postId)),
  on(loadPostsSuccess, (state, { posts }) => [...posts])
)
