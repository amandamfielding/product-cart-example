import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import ProductsContainer from './products/products_container';
import CartContainer from './cart/cart_container';
import { requestProducts } from '../actions/product_actions';
import { receiveItems } from '../actions/cart_actions';

const Root = ({ store }) => {

  const _requestProducts = () => {
    store.dispatch(requestProducts());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={ProductsContainer} onEnter={_requestProducts}/>
          <Route path="/cart" component={CartContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
