import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts.component";
import {PostComponent} from "./post/post.component";
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
})
export class PostsModule { }
