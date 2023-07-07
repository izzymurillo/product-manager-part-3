// vvvvv FROM THE LEARN PLATFORM vvvvv //
const { Product } = require("../models/product.model");

module.exports.index = (req, res) => {
  res.json({
    message: "Hello World!!!",
  });
};

module.exports.findAllProducts = (req, res) => {
  Product.find({})
    .then(products =>res.status(200).json(products))
    .catch(err => res.status(400).json(err))
};

// The method below is new
module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json(err));
};

// Find One Product
module.exports.getProduct = (req, res) => {
  Product.findOne({_id:req.params.id})
      .then(product => res.status(200).json(product))
      .catch(err => res.status(400).json(err))
};

// =======  UPDATE  ======== //
// module.exports.updateProduct = (req, res) => {
//   Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
//       .then(updatedProduct => res.status(200).json(updatedProduct))
//       .catch(err => res.status(400).json(err))
// };
// vvvvvv A BIT CLEANER CODE vvvvvv //
module.exports.updateProduct = (req, res) => {
  const {id} = req.params;
  Product.findByIdAndUpdate(id, req.body)
      .then(updatedProduct => res.status(200).json(updatedProduct))
      .catch(err => res.status(400).json(err))
};

// =======  DELETE  ======== //
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
      .then(deleteConfirmation => res.status(200).json(deleteConfirmation))
      .catch(err => res.status(400).json(err))
}











// --------------------------------------------------- //
// // vvvvvv CISO'S WAY vvvvvv //
// const Product = require("../models/product.model");

// const message = (req, res) => {
//   res.json("Hello World");
// };

// const create = (req, res) => {
//   Product.create(req.body)
//     .then(product => res.status(201).json(product))
//     .catch(err => res.status(400).json(err));
// };

// module.exports = { message, create };
