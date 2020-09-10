import React, { useEffect } from "react";
import {addToCart} from "../actions/cartActions"
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
    return (
        <div className = "cart">
            <div className = "cart-list">
                <ul className = "cart-list-container">
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
                    <div>
                        <img src={item.image} alt="product" />
                        <div className="cart-name">
                            {item.name}
                        </div>
                        <div className="cart-name">
                            Qty: 
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div>
                            {item.price}
                        </div>

                    </div>)
                    }
                </ul>
            </div>
            <div clasName = "cart-action">
                <h3>
                    SubTotal({cartItems.reduce((accu, curr)=>accu + curr.qty ,0)}):
                   $ {cartItems.reduce((accu, curr)=>accu+curr.price*curr.qty ,0)}
                </h3>
                <button className="button primary" disabled={cartItems.length === 0}>Proceed to Checkout</button>
            </div>

                
        </div>

    )
}

export default CartScreen