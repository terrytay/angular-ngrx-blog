import {createAction, props } from '@ngrx/store';
import {Post} from "../../posts/models/posts.model";
import { PostsActionTypes } from './posts.types';

export const addPost = createAction(
  PostsActionTypes.AddPost,
  props<{ post: Post }>()
)

export const removePost = createAction(
  PostsActionTypes.RemovePost,
  props<{ postId: string }>()
)

export const loadPostsSuccess = createAction(
  PostsActionTypes.LoadPostsSuccess,
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  PostsActionTypes.LoadPostsFailure
);

export const loadPosts = createAction(
  PostsActionTypes.LoadPosts
)
