import { SEARCH_PRODUCT } from './types'

export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
};
 
export const removeFromCart = (productId) => {
 
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId: productId
        }
    }
};
 
export const updateCartQuantity = (productId, quantity) => {
 
  return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
          productId,
          quantity: quantity
      }
  }
};
export const searchForProduct = name => {
  return {
      type: SEARCH_PRODUCT,
      payload: name
      }
};

