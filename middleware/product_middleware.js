import { fetchProducts } from '../util/product_api_util';
import { REQUEST_PRODUCTS, receiveProducts } from '../actions/product_actions';

export default ({getState, dispatch}) => next => action => {
  const successCallback = (data) => dispatch(receiveProducts(data));

  switch (action.type) {
    case REQUEST_PRODUCTS:
      fetchProducts(successCallback);
      return next(action);
    default:
      return next(action);
  }
};
