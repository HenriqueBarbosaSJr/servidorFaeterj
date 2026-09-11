/*
    Tipos de Request:
        GET = consulta
        POST = Cadastro
        PUT = Alteração
        DELETE = remove
*/

import express, { json } from 'express';
import routes from './src/routes.js';

const app = express();
app.use(json());
app.use(routes)


app.listen(3344, ()=> console.log('Servidor On - Porta 3344'));

