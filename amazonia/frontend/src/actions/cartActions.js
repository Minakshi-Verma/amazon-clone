import axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants"

//Action creator functions
//addToCart action that would be dispatched to reducer
// After adding the items to the cart, we will have access to getstate
const addToCart = (productId, qty) => async(dispatch,getState) =>{
    try{      
        const {data} = await axios.get("/api/products/"+ productId)
        console.log({data})
        dispatch({type: CART_ADD_ITEM, payload:{
            product: data._id,
            name: data.name,
            image: data.image,            
            price: data.price,
            countInStock: data.countInStock,
            qty
        }}) 
        //Saved the cartItems into the cookie
        const { cart: {cartItems}}= getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))
    }
    catch(error){
        // dispatch({type: CART_ADD_FAIL, payload:error.message}) 
        console.log(error)
    }
}

const removeFromCart =(productId)=>async(dispatch, getState)=>{   

    dispatch({type: CART_REMOVE_ITEM, payload: productId}) 
    //Saved the cartItems into the cookie
    const { cart: {cartItems}}= getState()
    Cookie.set("cartItems", JSON.stringify(cartItems)) 
}

export  {addToCart, removeFromCart}