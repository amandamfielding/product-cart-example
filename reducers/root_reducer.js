import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import CartReducer from './cart_reducer';

const RootReducer = combineReducers({
  products: ProductsReducer,
  items: CartReducer
});

export default RootReducer;
