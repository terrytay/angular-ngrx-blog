import {createReducer, on } from "@ngrx/store";
import {addPost, removePost, retrievedPosts} from './posts.actions';
import { Post } from "../models/posts.model";

export const initialState: Post[] = [];

export const postsReducer = createReducer(
  initialState,
  on(addPost, (state, { post }) => [...state, post]),
  on(removePost, (state, { postId }) => state.filter(post => post.id !== postId)),
  on(retrievedPosts, (state, { posts }) => [...posts])
)
