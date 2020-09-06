import React from 'react';
import data from "./data";
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen"
import './App.css';


function App() {
    

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
                        <a href = "cart.html">Cart</a>
                        <a href = "signin.html">Sign In</a>
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
