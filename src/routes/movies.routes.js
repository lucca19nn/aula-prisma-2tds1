import express from 'express';
import MovieController from '../controllers/movies.controller.js';

const moviesRouter = express.Router();

moviesRouter.get('/', MovieController.findAll)
moviesRouter.post("", MovieController.create);

export default moviesRouter;