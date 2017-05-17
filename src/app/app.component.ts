import { Component, OnInit } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppState, INITIAL_STATE, rootReducer } from './store/store';
import { select } from '@angular-redux/store/lib/src';
import { Observable } from 'rxjs/Rx';
import { CounterActions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @select() public readonly count$: Observable<number>;
  constructor(
      ngRedux: NgRedux<AppState>,
      devTools: DevToolsExtension,
      private action: CounterActions,
  ) {
      ngRedux.configureStore(
          rootReducer,
          INITIAL_STATE,
          null,
          devTools.isEnabled() ? [ devTools.enhancer() ] : []
      );
  }

  ngOnInit() {}
}
