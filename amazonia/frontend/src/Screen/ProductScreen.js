import React, { useState, useEffect } from "react";
// import data from "../data";
import {useParams, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { detailsProduct } from "../actions/productActions";


function ProductScreen(props){
    const [qty, setQty] = useState(1)
    // const {id} = useParams()
    // console.log("useParam", id)
    // const product = data.products.find(x => x._id===id);

    //OR
    // const id = props.match.params.id   
    // console.log(props.match.params.id)
   // const product = data.products.find(x => x._id===props.match.params.id);
    // console.log(product)


    const productDetails = useSelector(state=>state.productDetails)
    const {product, loading, error} = productDetails
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id))
        
    },[])

    const handleAddToCart = ()=>{
        //redirect the user to next url based on id and quantity 
        props.history.push("/cart/" + props.match.params.id + "?qty=" +qty)

    }
  return(
     <div>
        <div className="back-to-result">
            <Link to="/">Back to results</Link>
        </div>
       { loading ? <div>Loading...</div>:
        error? <div>{error}</div>:
        
        <div className = "details">
            <div className = "details-image">
                <img src = {product.image} alt= "product"/>
            </div>
            <div className= " details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        {product.description}
                    </li>
                </ul>
            </div>
            <div className= "details-action">
                <ul>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        
                        Status: {product.countInStock > 0 ? <div>In Stock</div>: <div>Unavailable</div> }
                    </li>
                    <li>
                        Qty: <select value = {qty} onChange ={(e)=>setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map(x=>
                            //Use x+1 since minimun qty should be 1 ( index starts with 0)
                                <option key={x+1} value = {x+1}>{x+1}</option>
                                )}
                            
                        </select>
                    </li>
                    <li>
                        {product.countInStock > 0  &&
                        <button onClick = {handleAddToCart} className= "button primary">Add to Cart</button>
                        }
                    </li>
                </ul>

            </div>
       
        </div>  
        }

     </div>
  )
  
}

export default ProductScreen