import { Component, inject } from '@angular/core';
import { provideImmerComponentStore } from 'ngrx-immer/component-store';
import { AppStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [provideImmerComponentStore(AppStore)]
})
export class AppComponent {
  title = 'angular-ngrx';

  appStore: AppStore = inject(AppStore);
  filters$ = this.appStore.filters$;

  updateFilters(): void {
    this.appStore.updateFilters({ query: 'a' })
  }

  getDate(): void {
    // this.appStore.getDate();
  }
}
