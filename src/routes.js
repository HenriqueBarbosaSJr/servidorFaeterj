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
routes.get('/produtos', controllerProd.consulta);
routes.post('/produtos', controllerProd.cadastro);
routes.put('/produtos/:codpro', controllerProd.updatePro);
routes.delete('/produtos/:codpro', controllerProd.deleteFor);


export default routes;


