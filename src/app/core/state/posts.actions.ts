import {createAction, props } from '@ngrx/store';
import {Post} from "../models/posts.model";

export const addPost = createAction(
  `[Posts] Add Post`,
  props<{ post: Post }>()
)

export const removePost = createAction(
  `[Posts] Remove Post`,
  props<{ postId: string }>()
)

export const retrievedPosts = createAction(
  '[Posts] Retrieve Posts Success',
  props<{ posts: Post[] }>()
);

