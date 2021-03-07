import { Injectable } from "@angular/core";
import { PostsService } from "src/app/posts/services/posts.service";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadPostsSuccess, loadPostsFailure } from "./posts.actions";
import { PostsActionTypes } from "./posts.types";

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActionTypes.LoadPosts),
      mergeMap(() => this.postsService.getPosts()
        .pipe(
          map(posts => loadPostsSuccess({posts}) ),
          catchError(() => of(loadPostsFailure()))
        )
      )
    )
  );
}
