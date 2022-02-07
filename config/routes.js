const express = require('express');
const routes = express.Router();

//"banco de dados"
let db = [
    'Augusto',
    'Michele',
    'Renato'
];

//enviar dados
routes.get('/', (req, res) => {
    return res.json(db);
});

//receber dados
routes.post('/add', (req, res) => {
    const body = req.body;

    if(!body){
        return res.status(400).end();
    }

    db.push(body.nome);
    return res.json(db);
});

//apagar dados
routes.delete('/:id', (req, res) => {
    const id = req.params.id;

    if(db[id] == undefined){
	return res.json("Usuário não existe!");
    }
    db.splice(id, 1);
    return res.json(db);
});

module.exports = routes;