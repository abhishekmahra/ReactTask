const express = require('express');
const sequelize = require('./config/db');
const productRoutes = require('./routes/products');

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server is running on port ${PORT}`);
});
