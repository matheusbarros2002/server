const express = require("express");

const routes = express.Router();

const ControllerClient = require("./controllers/controllersClient");

routes.post("/CadastroCliente", ControllerClient.cadastrar);
routes.delete("/ExcluirCliente", ControllerClient.excluir);

module.exports = routes;
