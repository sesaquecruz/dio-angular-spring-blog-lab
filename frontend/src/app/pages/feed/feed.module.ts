import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { feedReducer } from './state/feed.reducer';
import { FeedEffects } from './state/feed.effects';
import { FeedComponent } from './feed.component';
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
    RouterModule.forChild(routes),
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([FeedEffects])
  ]
})
export class FeedModule { }
