import express from 'express';
import movieRoutes from "./movies.routes.js"

const router = express.Router();

router.use('/movie', movieRoutes);

export default router;