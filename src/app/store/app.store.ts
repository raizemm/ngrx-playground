import { OnStoreInit } from '@ngrx/component-store';
import { ImmerComponentStore } from 'ngrx-immer/component-store';
import {Injectable} from "@angular/core";
import { delay, merge, of, switchMap, tap } from 'rxjs';

type Filters = {[key: string]: any};
interface AppState {
  filters: Filters;
}

@Injectable()
export class AppStore extends ImmerComponentStore<AppState> implements OnStoreInit {

  filters$ = this.select((state) => state.filters).pipe(
      tap(d => {
        console.log(d);
      })
  );

  constructor() {
    super({ filters: {query: ''} });
  }


  readonly updateFilters = this.updater((state, filters: Filters) => {
    state.filters = filters;
  });

  getDate = this.effect<Filters>(($) => {
    return $.pipe(
        switchMap(() => {
          return merge(of([1,2,3]).pipe(delay(1000)), of([4,5,6]).pipe(delay(1000)));
        })
    )
  })

  ngrxOnStoreInit(): void {
    this.getDate(this.filters$)
  }

}
