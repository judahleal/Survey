import { Router } from 'express';
import Perguntas from './controllers/Perguntas';

const routes = Router();

routes.get('/perguntas', Perguntas.index);
routes.post('/perguntas', Perguntas.create);
routes.get('/perguntas/:id', Perguntas.show);
routes.delete('/pergunta/:id', Perguntas.delete);
routes.put('/pergunta/:id', Perguntas.update);

export default routes;