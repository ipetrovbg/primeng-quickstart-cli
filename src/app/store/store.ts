import { Action } from 'redux';
import { CounterActions } from './actions';

export interface ExtendedAction extends Action {
    type: any;
    payload: any;
}
export interface AppState {
    count: number;
}

export const INITIAL_STATE: AppState = {
    count: 0
};

export function rootReducer(state: AppState, action: ExtendedAction): AppState {
    switch (action.type) {
        case CounterActions.COUNT: {
            state.count = state.count + 1;
            return Object.assign({}, state );
        }
        default: return state;
    }
}
