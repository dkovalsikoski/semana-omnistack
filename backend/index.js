const express = require('express');

const app = express();

//antes de todas as requisições, o express converte json em um objeto javascript
app.use(express.json())

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" para filtros, paginação, etc
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 */

app.post('/users', (request, response) => {
    const body = request.body

    console.log(body)

    return response.json({
        evento: 'Dhanyzinha produções',
        aluno: 'Little Dhany'
    })
})
app.listen(3333);