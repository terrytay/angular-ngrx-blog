import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Post} from "../models/posts.model";
import {Injectable} from "@angular/core";

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return of(samplePosts)
  }
};

const samplePosts: Post[] = [
  {
    title: 'Hello World',
    body: 'lorem ipsum',
    id: '29126'
  }
];
