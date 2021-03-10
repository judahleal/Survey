import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Pergunta from '../models/Pergunta';
import perguntaView from '../views/perguntas_view';
import * as Yup from 'yup';

export default {
    async index(request: Request, response: Response) {
        const perguntaRepository = getRepository(Pergunta);
        const perguntas = await perguntaRepository.find();
        if (!perguntas) {
            return response.json({ message: 'Nenhum resultado encontrado.' });
        }
        return response.json(perguntaView.renderMany(perguntas));
    },
    async show(request: Request, response: Response) {
        const { id } = request.params;
        const perguntaRepository = getRepository(Pergunta);
        const pergunta = await perguntaRepository.findOne(id);
        if (!pergunta) {
            return response.json({ message: 'Nenhum resultado encontrado.' });
        }
        return response.json(perguntaView.render(pergunta));
    },
    async create(request: Request, response: Response) {
        const {
            descricao,
            classificacao,
        } = request.body;

        const perguntasRepository = getRepository(Pergunta);

        const data = {
            descricao,
            classificacao,
            ativo: true,
            sim: 0,
            nao: 0,
            pessimo: 0,
            ruim: 0,
            regular: 0,
            bom: 0,
            excelente: 0,
        }

        const schema = Yup.object().shape({
            descricao: Yup.string().required(),
            classificacao: Yup.boolean().required(),
        });

        await schema.validate(data, {
            abortEarly: false
        });

        const pergunta = perguntasRepository.create(data);

        await perguntasRepository.save(pergunta);

        return response.status(201).json(pergunta);
    },
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { descricao, ativo } = request.body;
        const perguntaRepository = getRepository(Pergunta);
        const pergunta = await perguntaRepository.findOneOrFail(id);
        pergunta.descricao = descricao;
        pergunta.ativo = ativo;
        await perguntaRepository.save(pergunta);
        return response.json(perguntaView.render(pergunta));
    },
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const perguntaRepository = getRepository(Pergunta);
        const pergunta = await perguntaRepository.findOneOrFail(id);
        await perguntaRepository.remove(pergunta);
        return response.json({ message: 'Pergunta excluída.' });
    }
}