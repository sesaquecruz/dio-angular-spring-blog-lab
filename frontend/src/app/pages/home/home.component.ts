import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HomeState } from './state/home.reducer';
import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  post: FormGroup;
  publishing$: Observable<boolean>;
  published$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private store: Store<HomeState>,
              private fb: FormBuilder) {
    this.post = this.fb.group({
      author: ['', [Validators.required]],
      title: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });

    this.publishing$ = this.store.pipe(select(fromHomeSelectors.selectPublishing));
    this.published$ = this.store.pipe(select(fromHomeSelectors.selectPublished));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectError));
  }

  publish(): void {
    if (!this.post.invalid) {
      const value = this.post.value;

      const post = {
        id: '',
        date: '',
        author: value.author,
        title: value.title,
        text: value.text
      }

      this.store.dispatch(fromHomeActions.createPost(post));
    }
  }

  close(): void {
    this.store.dispatch(fromHomeActions.createPostClean());
  }
}
