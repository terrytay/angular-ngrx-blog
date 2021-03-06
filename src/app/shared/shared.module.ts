import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
  ],
  declarations: []
})
export class SharedModule {}
