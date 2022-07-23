import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import {
    Link
    } from "react-router-dom";


const OneProduct = () => {

    const {id} = useParams()

    const [details,setDetails] = useState({})
    const [notFound,setNotFound] =useState(false)
    const navigate = useNavigate();

    useEffect ( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response)
                if(response.data.product) {
                    setDetails(response.data.product);
                }else {
                    setNotFound(true)
                }
            })
            .catch(err => console.log(err))

    } ,[])
    

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(response => {
                console.log(response)
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    <br></br>


    
    return (
        <div>
            {
            notFound === true?
                <h3>Sorry, Product not found !</h3> :
                <>
                    <h3>Details about {details.title}:</h3>
                    <h5>Price: {details.price}</h5>
                    <h5>Description: {details.description}</h5>
                    <button onClick={deleteProduct} className = 'btn btn-danger'> Delete {details.title} </button>
                    <div>
                        <Link to ={`/product/edit/${id}`}  className = 'btn btn-warning'>Edit {details.title}</Link>
                    </div>
                </>
            
            }       
        </div>
    );
};



export default OneProduct;