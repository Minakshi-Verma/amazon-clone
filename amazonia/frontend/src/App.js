import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import SigninScreen from "./screen/SigninScreen";
import RegisterScreen from "./screen/RegisterScreen";
import {useSelector} from "react-redux";
import './App.css';


function App() {
    const userSignin = useSelector(state=>state.userSignin)
    const {userInfo} = userSignin
    console.log("from App",userInfo)

  const openMenu = ()=>{
  document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = ()=>{
document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
        <div className= "grid-container">
                <header className= "header">
                    <div className= "brand" >
                        <button onClick={openMenu}>
                        &#9776; 
                        </button>
                        <Link to="/">amazonia</Link>                       
                    </div>
                    <div className= "header-links">
                        <Link to="/cart">Cart</Link>
                       
                        {
                        userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                        <Link to="/signin">Sign in</Link>
                        }
                        
                        
                    </div>                
                </header>
                <aside className= "sidebar">
                    <h3>Categories</h3>
                    <button className= "sidebar-close-button" onClick={closeMenu}>X</button>
                    <ul>
                        <li>
                            <a href= "index.html">Dresses</a>
                        </li>
                        <li>
                            <a href= "index.html">Tops</a>
                        </li>
                        <li>
                            <a href= "index.html">Bottoms</a>
                        </li>
                        <li>
                            <a href= "index.html">Accessories</a>
                        </li>
                    </ul>
                </aside>
                <main className= "main">
                    <div className="content">
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path= "/cart/:id?" component = {CartScreen}/>
                        <Route path="/signin" component= {SigninScreen} />
                        <Route path="/register" component= {RegisterScreen} />                        
                        <Route path="/" exact={true} component={HomeScreen} />
                        
                       
                      
                    </div>                
                </main>
                <footer className= "footer">
                    All right reserved.
                </footer>
            </div>
        </ BrowserRouter>



 );
}

export default App;

