import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/posts.model";
import {Observable} from "rxjs";
import {PostsService} from "../../services/posts.service";
import {addPost, removePost, retrievedPosts} from "../../../store/posts/posts.actions";
import {select, Store} from "@ngrx/store";
import { selectPosts } from 'src/app/store/posts/posts.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = this.store.pipe(select(selectPosts));

  constructor(private postsService: PostsService, private store: Store) { }

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe((posts: Post[]) => this.store
        .dispatch(
        retrievedPosts({ posts })
        )
      );
  }

  onAdd(post: Post) {
    this.store.dispatch( addPost({ post }) );
  }

  onRemove(postId: string) {
    this.store.dispatch( removePost({ postId }) );
  }

}
