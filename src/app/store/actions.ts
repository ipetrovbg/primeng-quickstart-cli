import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';

@Injectable()
export class CounterActions {
    static COUNT = 'COUNT';

    constructor(private ngRedux: NgRedux<AppState>) {}

    count() {
        this.ngRedux.dispatch({ type: CounterActions.COUNT });
    }
}
