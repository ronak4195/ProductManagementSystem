const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product.routes');

const app = express();
const PORT = 4000;
const cors = require('cors');

// Enable CORS for all requests
app.use(cors());
//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
