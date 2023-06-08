import React from "react";
import axios from 'axios';
import './style.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';


function App() {
  const [search,setSearch] = useState()
  const[product, setProduct] = useState([])
  const [error,setError] = useState('')
  const [photoRemove,setPhotoremove] = useState("photo")

  const SearchClick = async (e) =>{
   try{
    e.preventDefault() 
    setError('')
    setPhotoremove('photo')

    const response = await axios.get(
      `https://dummyjson.com/products/${search}`,
      
    )

const prod = response

    setProduct(prod.data)

    console.log(prod)

  }catch{
    setError('პროდუქტი ვერ მოიძებნა')
    setProduct("")
    setPhotoremove('removePhoto')
}
  }

  return (
    
      <BrowserRouter>
      
       <Route exact path="/" >
        <div className="searchWrapper">
        <div className="inputDiv">  
       <input className='searchInput' type="number" placeholder="Type number" value={search} onChange={(e) => setSearch(e.target.value)}/> 
              <button onClick={SearchClick}  className='searchBtn' type="button" >
              <Link to={`/product/${search}` }>
             search
              </Link> 
              </button>   
       </div> 
        </div>
  
       </Route>


       <Route exact path="/product/:search" >
        <div className="wrapper">
        <div className="card">
       <img  className={photoRemove} src={product.thumbnail} alt='idk'/>
       <h1 className="title">{product.title}</h1>
       <p className="productDescr">{product.description}</p>
       <p className="price">{product.price}</p>
      <h1>{error}</h1>
       </div>
      <Link className="button" to={`/`} >Back</Link>
        </div>
        
       </Route>



    </BrowserRouter>


   



  );
}

export default App;
