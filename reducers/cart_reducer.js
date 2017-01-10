import { RECEIVE_ITEMS, ADD_ITEM } from '../actions/cart_actions';
import merge from 'lodash/merge';

const CartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ITEMS:
      return state.items || {};
    case ADD_ITEM:
      const newItem = {[action.item.id]: action.item};
      return merge({},state,newItem);
    default:
      return state;
  }
};

export default CartReducer;
