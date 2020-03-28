const express = require('express');
const routes = require('./routes')

const app = express();

//antes de todas as requisições, o express converte json em um objeto javascript
app.use(express.json())
app.use(routes)

app.listen(3333);

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

