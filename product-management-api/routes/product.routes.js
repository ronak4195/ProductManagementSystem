const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

//Create
router.post('/products', productController.createProduct);

//Read all products
router.get('/products', productController.getAllProducts);

//Read by ID
router.get('/products/:id', productController.getProductById);

//Update by ID
router.put('/products/:id', productController.updateProduct);

//Delete by ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
