import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from 'src/app/shared/components/post/post.component';

const routes: Routes = [
  {path: '', component: FeedComponent}
]

@NgModule({
  declarations: [
    FeedComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedModule { }
