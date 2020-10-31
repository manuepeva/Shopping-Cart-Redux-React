import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productReducer } from './Reducer/productReducer'
import { cartReducer } from './Reducer/cartReducer'
import { orderReducer } from './Reducer/orderReducer'


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
}),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;