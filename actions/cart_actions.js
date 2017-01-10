export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const ADD_ITEM = "ADD ITEM";
export const DELETE_ITEM = "DELETE ITEM";

export const requestItems = () => ({
  type: REQUEST_ITEMS
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item
});

export const receiveItems = () => ({
  type: RECEIVE_ITEMS
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const deleteItem = item => ({
  type: DELETE_ITEM,
  item
});
