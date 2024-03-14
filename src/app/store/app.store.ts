import { ImmerComponentStore } from 'ngrx-immer/component-store';
import {Injectable} from "@angular/core";

type Filters = {[key: string]: any};
interface AppState {
  filters: Filters;
}

@Injectable()
export class AppStore extends ImmerComponentStore<AppState> {
  constructor() {
    super();
  }

  readonly updateFilters = this.updater((state, filters: Filters) => {
    state.filters = filters;
  });
}
