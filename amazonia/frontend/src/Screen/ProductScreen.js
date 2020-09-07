import React from "react";
import data from "../data";
import {useParams, Link} from 'react-router-dom'


function ProductScreen(props){
    const {id} = useParams()
    // console.log("useParam", id)

    // const id = props.match.params.id   
    // console.log(props.match.params.id)
  

    
    const product = data.products.find(x => x._id===id);
    // const product = data.products.find(x => x._id===props.match.params.id);
    console.log(product)
    
    
  
  return(
     <div>
        <div className="back-to-result">
            <Link to="/">Back to results</Link>
        </div>
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
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </li>
                    <li>
                        <button className= "button primary">Add to Cart</button>
                    </li>
                </ul>

            </div>
       
        </div>  
        

     </div>
  )
  
}

export default ProductScreen