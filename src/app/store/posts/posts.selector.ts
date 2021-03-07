import {createSelector} from "@ngrx/store";
import { Post } from "src/app/posts/models/posts.model";
import { AppState } from "../app.state";

export const selectPosts = createSelector(
  (state: AppState) => state.posts,
  (posts: Post[]) => posts
)
