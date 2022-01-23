import { createSelector } from 'reselect';

const selectProductsReducer = state => state.product;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Auth
 */

const makeSelectProducts = () =>
  createSelector(selectProductsReducer, substate => substate.products);

export { makeSelectProducts };
