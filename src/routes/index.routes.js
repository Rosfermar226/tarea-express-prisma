import { Router } from 'express';
import userRoutes from './user.routes.js';
import productRoutes from './product.routes.js';

const router = Router();

// Rutas del recurso Users
router.use('/users', userRoutes);

// Rutas de tu nueva entidad Product
router.use('/products', productRoutes);

export default router;