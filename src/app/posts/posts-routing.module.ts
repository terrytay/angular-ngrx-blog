import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {PostsComponent} from "./components/posts-page/posts.component";

const routes: Route[] = [
  {
    path: '',
    component: PostsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
