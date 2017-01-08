import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';

const RootReducer = combineReducers({
  products: ProductsReducer
});

export default RootReducer;
