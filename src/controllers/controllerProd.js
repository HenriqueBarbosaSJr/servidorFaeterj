import db from '../database/db.js';

export default {

    async raiz(req, res){
        return res.send(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Documentação</title>
                    </head>
                    <body>
                        <h1>Documentação da API</h1>
                        <p>Bem-vindo à documentação da nossa API! Esta interface foi projetada para facilitar a integração e o gerenciamento de dados essenciais do sistema, como clientes, produtos, fornecedores e compras.

                    Seguindo os princípios REST, a API utiliza os métodos HTTP padrão (GET, POST, PUT, DELETE) e se comunica através do formato JSON, garantindo previsibilidade e facilidade de uso.

                    Neste documento, você encontrará primeiro uma descrição detalhada da estrutura do banco de dados para entender o modelo de dados. Em seguida, apresentamos a lista completa de endpoints disponíveis, com exemplos de requisições e respostas para cada operação.</p>
                    </body>
                </html>
            `);
    },

    async consulta(req, res){
        const result = await db('produtos');


        return res.send(result);

    }


}