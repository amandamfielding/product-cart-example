import { applyMiddleware } from 'redux';
import ProductMiddleware from './product_middleware';
import CartMiddleware from './cart_middleware';

const RootMiddleware = applyMiddleware(
  ProductMiddleware,
  CartMiddleware
);

export default RootMiddleware;
