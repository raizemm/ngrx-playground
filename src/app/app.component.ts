import { Component } from '@angular/core';
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
}
