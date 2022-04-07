import { createStore, combineReducers } from 'redux';
import cartReducer from './cartSlice';
// import orderReducer from './slices/orderSlice';

const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;