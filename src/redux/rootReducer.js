import { combineReducers } from 'redux';
import productReducer from '../Products/reducer';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
