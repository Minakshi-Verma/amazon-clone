
import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants"


//addToCart action that would be dispatched to reducer
const addToCart = (productId, qty) => async(dispatch) =>{
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
    }
    catch(error){
        // dispatch({type: CART_ADD_FAIL, payload:error.message}) 
        console.log(error)
    }
}

const removeFromCart =(productId)=>async(dispatch)=>{   

    dispatch({type: CART_REMOVE_ITEM, payload: productId})  
}

export  {addToCart, removeFromCart}