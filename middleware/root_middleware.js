import { applyMiddleware } from 'redux';
import ProductMiddleware from './product_middleware';

const RootMiddleware = applyMiddleware(
  ProductMiddleware
);

export default RootMiddleware;
