import React from "react";
import axios from 'axios';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';


function App(e) {
  const [search,setSearch] = useState()
  const[product, setProduct] = useState([])

  const SearchClick = async (e) =>{
   try{
    e.preventDefault() 

    const response = await axios.get(
      `https://dummyjson.com/products/${search}`,
      
    )

const prod = response

    setProduct(prod)

    console.log(prod)

  }catch{

}
  }


  return (
    
      <BrowserRouter>
      
       <Route exact path="/" >
       <div className="inputDiv">  
       <form >
       <input className='searchInput' type="number" placeholder="Type number" value={search} onChange={(e) => setSearch(e.target.value)}/> 
            <Link to={`/product/${search}` }>
            <button onClick={SearchClick}  className='searchBtn' type="submit" >
              search
              </button>     
              </Link> 
        </form> 
       </div> 
       </Route>


       <Route exact path="/product/:search" >
          
       <h1>{product.price}</h1>
       </Route>



    </BrowserRouter>


   



  );
}

export default App;
