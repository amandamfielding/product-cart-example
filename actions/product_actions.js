export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const REQUEST_PRODUCT = "REQUEST_PRODUCT";

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

export const requestProduct = id => ({
  type: REQUEST_PRODUCT,
  id
});

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});
