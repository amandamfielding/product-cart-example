import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';
import merge from 'lodash/merge';

const ProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return action.products.products;
    default:
      return state;
  }
};

export default ProductsReducer;
