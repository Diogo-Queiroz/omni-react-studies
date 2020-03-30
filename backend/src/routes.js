const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionsController');
/*
 ROTAS / RECURSOS
*/

/**
 * Metodos HTTP
 * GET: Solicitar do Back-end
 * POST: Criar no Back-end
 * PUT: Alterar do Back-end
 * DELETE: Deletar do Back-end
 */

/**
  * Tipos de Parametros
  * 
  * Query: parametros nomeados na rota apos "?"
  * servem para filtros, paginacao, etc...
  * Route: parametros utilizados para identificar recursos (/users/:id) 
  * Body: 
  */

/**
 * Bancos de Dados:
 * SQL: MySQL, SQLite, Microsoft SQL Server
 * NoSQL: MongoDB, etc
 */

/**
  * Driver: SELECT * FROM users -> Direto para o SQL
  * Query Builder: table('users').select('*').where();
  * -> Abordagem mais ampla, nao depende de bando de dados especifico
  */

routes.post('/sessions', SessionsController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/users/:id', (request, response) => {
  const params = request.params; // GET Route params

  console.log(params);

  return response.json({
    evento: "Semana OmniStack",
    name: "Diogo Queiroz"
  });
});

module.exports = routes;