import {createSelector} from "@ngrx/store";
import {AppState} from "./app.state";
import {Post} from "../models/posts.model";

export const selectPosts = createSelector(
  (state: AppState) => state.posts,
  (posts: Post[]) => posts
)
