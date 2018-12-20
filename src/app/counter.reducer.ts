import { Actions } from './counter.actions';
import produce from 'immer';

export const initialState = 0;

const producer = (draft, action) => Actions.match(action, {
  Increment: () => draft + 1,
  Decrement: () => draft - 1,
  Reset: () => initialState,
  default: () => {}
});

export const counterReducer = produce(producer, initialState);
