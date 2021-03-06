import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
