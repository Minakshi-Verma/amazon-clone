import React, { useState, useEffect } from "react"
// import data from "../data"
import { Link } from "react-router-dom";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux"
import {listProducts} from "../actions/productActions"


const HomeScreen = (props)=>{
    // console.log(props)
    // const [products, setProducts] = useState([])

    const productList = useSelector(state=>state.productList)
    const {products, loading, error} = productList

    const dispatch = useDispatch()
    useEffect(()=>{ 
        dispatch(listProducts())
        
    }, [])

    // useEffect(()=>{ 
    //     axios
    //         .get(`/api/products`)
    //         .then(res=>{
    //          console.log(res.data)
    //          setProducts(res.data)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    // }, [])

    // useEffect(() => {
    //     const fetchData = async () =>{
    //         const {data} = await axios.get("/api/products")
    //         // console.log(data)
    //         setProducts(data)
    //     }
    //     fetchData()
    //     return ()=>{
    //         //
    //     }
    // })

    return(  
        loading ? <div> Loading...</div> : 
        error ? <div>{error}</div> :    
            <ul className="products">  
                        {
                            products && products.map(product=>
                            <li key = {product._id}>
                            <div className="product">                                                          
                                <Link to={'/product/'+ product._id}>
                                    <img className= "product-image" src = {product.image} alt = "product1"/>
                                </Link>  
                                 <div className= "product-name">
                                <Link to={'/product/'+ product._id}> {product.name}</Link>
                                </div>
                                <div className= "product-brand">{product.brand}</div>
                                <div className= "product-price">${product.price}</div>
                                <div className= "product-rating">{product.rating} Stars {product.numReviews} Reviews</div>                                
                            </div>
                        </li>
                        )}                                                    
                        </ul>      
    )
}

export default  HomeScreen