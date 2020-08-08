import express from 'express';
import routes from './routes';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

//GET: buscar ou listar info
//POST: criar alguma coisa nova
//PUT: atualizar
//DELETE: deletar

// Corpo (request body): dados para criar ou atualizar um registro
// route params: identifiar qual recurso quero atualizar ou deletar
// query params: paginacao , filtros, coordenar



//localhost:3333
app.listen(3333);
