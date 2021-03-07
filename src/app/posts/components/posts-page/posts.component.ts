import { Component, OnDestroy, OnInit } from '@angular/core';
import {Post} from "../../models/posts.model";
import {Observable} from "rxjs";
import {addPost, loadPosts, removePost} from "../../../store/posts/posts.actions";
import {select, Store} from "@ngrx/store";
import { selectPosts } from 'src/app/store/posts/posts.selector';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = this.store.pipe(select(selectPosts));


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch( loadPosts() );
  }

  onAdd(post: Post) {
    this.store.dispatch( addPost({ post }) );
  }

  onRemove(postId: string) {
    this.store.dispatch( removePost({ postId }) );
  }

}
