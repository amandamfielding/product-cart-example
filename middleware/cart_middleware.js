import { ADD_ITEM, RECEIVE_ITEMS } from '../actions/cart_actions';

export default ({getState, dispatch}) => next => action => {

  switch (action.type) {
    case ADD_ITEM:
      return next(action);
    case RECEIVE_ITEMS:
      return next(action);
    default:
      return next(action);
  }
};
