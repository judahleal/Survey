import { Request, Response } from 'express';
import PerguntaRepository from '../repository/PerguntaRepository';

export default {
    async index(request: Request, response: Response) {
        return await PerguntaRepository.index(request, response);
    },
    async start(request: Request, response: Response) {
        return await PerguntaRepository.start(request, response);
    },
    async show(request: Request, response: Response) {
        return await PerguntaRepository.show(request, response);
    },
    async create(request: Request, response: Response) {
        return await PerguntaRepository.create(request, response);
    },
    async update(request: Request, response: Response) {
        return await PerguntaRepository.update(request, response);
    },
    async delete(request: Request, response: Response) {
        return await PerguntaRepository.delete(request, response);
    }
}