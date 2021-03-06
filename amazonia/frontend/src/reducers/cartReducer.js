
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer (state = {cartItems:[]}, action){
    switch(action.type){
    case CART_ADD_ITEM:   
        const item = action.payload;
        const product = state.cartItems.find(x=>x.product===item.product);
        if (product){
            return {
                cartItems:
                 state.cartItems.map(x=>x.product===product.product? item:x)
            }
                 //.product(in product.product) is the id of the product
        }
        return{cartItems:[...state.cartItems, item]}

    case CART_REMOVE_ITEM:
        return{
            cartItems:
            state.cartItems.filter(item=>item.product!=action.payload)
        }
        default:
           return state
    }
}

export {cartReducer}