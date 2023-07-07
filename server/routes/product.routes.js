// // // vvvvv FROM THE LEARN PLATFORM vvvvv //
const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api", ProductController.index);

  app.get("/api/products", ProductController.findAllProducts);
  app.post("/api/products", ProductController.createProduct);
  app.get("/api/products/:id", ProductController.getProduct);
  app.put("/api/products/:id", ProductController.updateProduct);
  app.delete("/api/products/:id", ProductController.deleteProduct);
};

// --------------------------------------------- //
// // vvvvvv CISO'S WAY vvvvvv //
// const { message } = require("../controllers/product.controller");

// const express = require("express");
// const productRouter = express.Router();

// productRouter
//   .route('/')
//   .get(message);

// productRouter
//     .route('/products')
//     .post(create)
//     .get(findAll);

// module.exports = productRouter;
