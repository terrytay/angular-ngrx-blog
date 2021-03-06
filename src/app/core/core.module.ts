import { NgModule, Optional, SkipSelf } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {postsReducer} from "./state/posts.reducer";
import {PostsService} from "./services/posts.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  providers: [
    PostsService,
  ],
  imports: [
    HttpClientModule,
    StoreModule.forRoot({posts: postsReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      )
    }
  }
}
