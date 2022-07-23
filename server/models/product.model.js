const mongoose = require("mongoose"); //mongoose is whats gonna allows us to write javascript to define our table for MongoDB


//title, price,description

const ProductSchema = new mongoose.Schema({
	title: {
        type: String,
        required: [true,"Title is required!"],
        minlength: [6, "Title must be atleast 6 chracter long"]
    },
    price: {
        type: Number,
        required: [true,"Price is required!"],
        minlength: [1, "Price must be atleast 1 chracter long"]
    },
    description: {
        type: String,
        required: [true,"Description is required!"],
        minlength: [6, "Description must be atleast 6 chracter long"]
    }
    // imgUrl:{
    //     type:String,
    //     required: [true,"Image is required!"],
    // },

    // gradDate:{
    //     type:Date
    // },

    //isVeteran:{
    //     type:Boolean
    // }
},
{ timestamps: true }
);


//This line registers the above code  through line6 so its registered as table in our database, where "Product" is tablename
//and a variable Product by using const
const Product = mongoose.model("Product", ProductSchema); 

module.exports = Product;//Here we are exporting the variable Product