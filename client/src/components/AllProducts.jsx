import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";



const AllProducts = () => {

    let [products,setProducts] = useState([])//if we want to save response from api, we have to put it in state variable

    useEffect (() =>{
        axios.get ("http://localhost:8000/api/products")
            .then((response) => {
                console.log("response:", response);
                setProducts(response.data.products);
            })//callback is a function thats given as an input to another fn 
            //Inside this call back ,it takes a parameter which represents whatever response we get back from API
            //which is object in this instance 
            //whenever state variable updates, component rerenders
            //whenever component rerenders all of the code runs again
            //useEffect hook lets block of code run only once on first render
            .catch(err => console.log(err))

    },[] )
        
    return (
        <div>
            <h2>All Products :</h2>
            {
                products.map((product,i) => {  //callback function, foreach product i want to return a div
                    return(
                        <div key={product._id}>
                            <h4><Link to = {`/products/${product._id}`} >{product.title}</Link></h4>
                            
                        </div>
                    )


                })
            }
        </div>
    );
};



export default AllProducts;