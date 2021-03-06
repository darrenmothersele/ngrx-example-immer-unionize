import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Actions } from './counter.actions';

@Component({
  selector: 'app-root',
  template: `    
      <button (click)="increment()">Increment</button>
      <div>Current Count: {{ count$ | async }}</div>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset Counter</button>
  `,
  styles: []
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }
  increment() {
    this.store.dispatch(Actions.Increment());
  }

  decrement() {
    this.store.dispatch(Actions.Decrement());
  }

  reset() {
    this.store.dispatch(Actions.Reset());
  }

}
