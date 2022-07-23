const ProductController = require("../controllers/product.controller");


//arrow funtion with parameter app
module.exports = (app) => {
  app.get("/api/products/", ProductController.findAllProducts);//params
  app.get("/api/products/:id", ProductController.findOneSingleProduct);//params
  app.put("/api/products/update/:id", ProductController.updateExistingProduct); //body x-www format
  app.post("/api/products/new", ProductController.createNewProduct);//body x-www
  app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);//params
};
