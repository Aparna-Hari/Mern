const express = require("express");  //to import express so that we can build an API
//const productRoutes = require("./server/routes/product.routes");
const cors = require("cors");//allows backend api to share resources with our react app
const app = express(); //But to use express we have to initialize to a variable 'app' that's instance of express();
const port = 8000;


//make sure these lines are above any app.get or app.post code blocks
app.use( express.json(), express.urlencoded({ extended: true }) );
app.use(cors());



// This will fire our mongoose.connect statement to initialize our database connection (or) simply connect to db using config file
require("./server/config/mongoose.config");

require("./server/routes/product.routes")(app);

// This is where we import the Products routes function from our Product.routes.js file
//const AllMyProductRoutes = require("./server/routes/Product.routes");
//AllMyProductRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
//This needs to be below our code blocks