import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { productListReducer } from "./reducers/productReducers";
import thunk from "redux-thunk"

const initialState ={};
const reducer = combineReducers({
    productList: productListReducer,
})
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSTION_COMPOSE__|| compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store