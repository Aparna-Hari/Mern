const mongoose = require("mongoose"); //to import mongoose so we can connect to MongoDB database using Mongoose

const db_name = "ninjas_db"

//You can use backticks ,so you can put variable inside of a string

mongoose.connect(`mongodb://localhost/${db_name}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the  database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));