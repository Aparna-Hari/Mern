import React, {useState,useEffect} from 'react';

import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';

const EditForm = () => {
    
    const {id} = useParams();
    const [details,setDetails] = useState({});
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const navigate = useNavigate();
   
    
    useEffect ( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response)
                if(response.data.product) {
                    setDetails(response.data.product);
                }
                // else {
                //     setNotFound(true)
                // }
            })
            .catch(err => console.log(err))

    } ,[])
    
    // const editProduct = e => {
    //     e.preventDefault();
    //     axios.put(`http://localhost:8000/api/products/update/${id}`, {
    //         title,
    //         price,
    //         description
            
    // })
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    //     setHasBeenSubmitted(true);
    // };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
                return "Thank you for updating the Product!";
        } else {
                return "Welcome, please edit the product";
        }
    };

    const changeHandler = (e) =>{
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        })
    }

    const editProduct =(e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`,details)
        .then(response => {
            console.log("response after submitting",response)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={editProduct}>
                <h3> { formMessage() }</h3>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={ changeHandler } value={ details.title } />
                    <p></p>
                </div>

                <div>
                    <label>Price: </label>
                    <input type="text" name="price" onChange={ changeHandler } value={ details.price } />
                    <p></p>
                </div> 

                <div>
                    <label>Description: </label>
                    <input type="text" name="description" onChange={ changeHandler } value={details.description} />
                    <p></p>
                </div>

                <input type="submit" value="Edit Product" />
                <hr></hr>
            </form>
        </div>
    );
};



export default EditForm;