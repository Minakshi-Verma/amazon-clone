import React, { useEffect } from "react";
import{Link} from 'react-router-dom';
import {addToCart, removeFromCart} from "../actions/cartActions"
import {useSelector, useDispatch} from "react-redux"
import { CART_ADD_ITEM } from "../constants/cartConstants";

const CartScreen = (props) =>{
    //access the cart from redux store
    const cart = useSelector(state=>state.cart)

    const {cartItems} = cart

    //access the productId 
    const productId = props.match.params.id
    //access the query string(qty) 
    const qty = props.location.search ? Number(props.location.search.split("=")[1]): 1
    console.log("qty", qty)

    // const []= useSelector(state=>state.)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }        
    }, [])

    const removeFromCartHandler = (productId)=>{
        dispatch(removeFromCart(productId))        
    }
    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div>
                            Price
                        </div>
                    </li>
                    {cartItems.length ===0?
                    <div>Cart is Empty</div>:
                    cartItems.map(item=>
                    <li>
                        <div className="cart-image">
                            <img src={item.image} alt="product" />
                        </div>    
                        <div className="cart-name">
                            <div>
                               <Link to={"/product/"+ productId}>{item.name}</Link> 
                               {/* <Link to={"/product/"+ item.product}>{item.name}</Link>  */}
                            </div>                        
                            <div>
                                Qty: 
                                <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, e.target.value))}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                
                                <button type="button" className= "button" onClick ={()=>removeFromCartHandler(item.product)}>Delete</button>
                            </div>
                        </div>
                        <div className="cart-price">
                            ${item.price}
                        </div>
                    </li>)
                    }
                </ul>
            </div>
            <div className="cart-action">
                <h3>
                    Sub Total({cartItems.reduce((accu, curr)=>accu + curr.qty ,0)}):
                   $ {cartItems.reduce((accu, curr)=>accu+curr.price*curr.qty ,0)}
                </h3>
                <button className="button primary" disabled={cartItems.length === 0}>Proceed to Checkout</button>
            </div>                
        </div>

    )
}

export default CartScreen