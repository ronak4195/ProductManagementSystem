const Product = require('../models/product.model');
const { Op } = require('sequelize');

//Create product
exports.createProduct = async (req, res) => {
    try {
      const { name, price, description, category } = req.body;
      const product = await Product.create({ name, price, description, category });
      res.status(201).send(product);
    } catch (error) {
      res.status(500).send({ message:"Error 500: " + error.message });
    }
  };
  

//Get all products without pagination and search functionality
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.findAll();
//     res.status(200).send(products);
//   } catch (error) {
//     res.status(500).send({ message:"Error 500: " + error.message });
//   }
// };

//get all products with pagination and search functionality
exports.getAllProducts = async (req, res) => {
    try {
      //pagination parameters
      const page = parseInt(req.query.page) || 1; //default page = 1
      const limit = parseInt(req.query.limit) || 10; //page limit = 10
      const offset = (page - 1) * limit;

      const { name, category } = req.query;
      const whereClause = {};
      //search using like operator
      if (name) {
        whereClause.name = { [Op.like]: `%${name}%` }; 
      }
      if (category) {
        whereClause.category = { [Op.like]: `%${category}%` };
      }
  
      //fetch products with pagination and search conditions
      const products = await Product.findAndCountAll({
        where: whereClause,
        limit,
        offset
      });
  
      res.status(200).send({
        totalItems: products.count,
        totalPages: Math.ceil(products.count / limit),
        currentPage: page,
        products: products.rows,
      });
    } catch (error) {
      res.status(500).send({ message: "Error 500: " + error.message });
    }
  };
  

//Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: 'Error 404: Product not found' });
    }
  } catch (error) {
    res.status(500).send({ message:"Error 500: " + error.message });
  }
};

//Update product by ID
exports.updateProduct = async (req, res) => {
    try {
      const { name, price, description, category } = req.body;
      const product = await Product.findByPk(req.params.id);
      if (product) {
        await product.update({ name, price, description, category });
        res.status(200).send(product);
      } else {
        res.status(404).send({ message: 'Error 404: Product not found' });
      }
    } catch (error) {
      res.status(500).send({ message:"Error 500: " + error.message });
    }
  };
  

//Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(200).send({ message: 'Product deleted successfully' });
    } else {
      res.status(404).send({ message: 'Error 404: Product not found' });
    }
  } catch (error) {
    res.status(500).send({ message:"Error 500: " + error.message });
  }
};
