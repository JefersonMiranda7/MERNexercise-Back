import express from 'express';
import cors from 'cors';
import productRoutes from './routes/Productroutes.js';
import orderRoutes from './routes/OrderRoutes.js';
import orderItemRoutes from './routes/OrderItemRoutes.js';
import db from './database/db.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/orderItems', orderItemRoutes);

try {
  await db.authenticate();
  console.log('Conexión exitosa a la base de datos.');
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

app.get('/', (req, res) => {
  res.send('Este es el back.');
})

app.listen(5000, () => {
  console.log('Server App running in http://localhost:5000/')
})