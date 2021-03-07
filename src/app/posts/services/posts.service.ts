import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Post} from "../models/posts.model";
import {Injectable} from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class PostsService {
  constructor(private http: HttpClient, private db: AngularFirestore) {}

  getPosts(): Observable<Post[]> {
    return this.db.collection<Post>('posts').valueChanges();
  }
};
