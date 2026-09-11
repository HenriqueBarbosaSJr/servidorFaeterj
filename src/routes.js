/*
    Tipos de Request:
        GET = consulta
        POST = Cadastro
        PUT = Alteração
        DELETE = remove
*/

import express from 'express';
import controllerProd from './controllers/controllerProd.js';

const routes = express.Router();

routes.get('/', controllerProd.raiz);
routes.get('/consulta', controllerProd.consulta);


export default routes;


