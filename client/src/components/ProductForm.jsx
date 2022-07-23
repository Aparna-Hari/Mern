
import React, {useState} from 'react';


import axios from "axios";



//functional component named same as filename = arrow function which returns a div
const ProductForm  = () => {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errors,setErrors] = useState([]);


    const createProduct = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
            
    })
        .then(res => console.log(res))
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })  
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
                return "Thank you for creating the Product!";
        } else {
                return "Welcome, please submit the product";
        }
    };
    return (
        <div>
            <form onSubmit={createProduct}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <h3> { formMessage() }</h3>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={ (e) => setTitle(e.target.value) } value={ title } />
                    <p></p>
                </div>

                <div>
                    <label>Price: </label>
                    <input type="text" onChange={ (e) => setPrice(e.target.value) } value={ price } />
                    <p></p>
                </div> 

                <div>
                    <label>Description: </label>
                    <input type="text" onChange={ (e) => setDescription(e.target.value) } value={description} />
                    <p></p>
                </div>

                <input type="submit" value="Create Product" />
                <hr></hr>
            </form>
        </div>
    );
};



export default ProductForm;

