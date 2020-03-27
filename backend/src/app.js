const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 *Método HTTP
 *
 *GET: Buscar/listar uma informação do back-end
 *POST: Criar uma informação do back-end
 *PUT: Alterar uma informação do back-end
 *DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de Parâmetros
 *
 * Query Params: Parâmetros nomeados e enviados na rota, após o símbolo "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 *Rotas e Recursos
 */
