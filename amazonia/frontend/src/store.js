import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import thunk from "redux-thunk"
import {cartReducer} from "./reducers/cartReducer";

const initialState ={};


// combining all the created reducers that would take the action and return the updated state based on that action
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
    
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
// console.log(store)

export default store

