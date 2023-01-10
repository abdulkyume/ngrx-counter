import { Increase, Decrease, Reset } from './actions';
import { initialState } from './initialState';
import { createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
  initialState,
  on(Increase, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(Decrease, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(Reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
