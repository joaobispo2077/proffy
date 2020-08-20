import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const upload = multer(multerConfig);

const classesControllers = new ClassesController();

const connectionsController = new ConnectionsController();

routes.get('/classes',  classesControllers.index);
routes.post('/classes', upload.single('avatar'),classesControllers.create);

routes.get('/connections',  connectionsController.index);
routes.post('/connections',  connectionsController.create);

export default routes;