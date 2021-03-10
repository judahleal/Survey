import Pergunta from '../models/Pergunta';

export default {
    render(pergunta: Pergunta) {
        if (!pergunta.classificacao) {
            return {
                id: pergunta.id,
                ativo: pergunta.ativo,
                descricao: pergunta.descricao,
                sim: pergunta.sim,
                nao: pergunta.nao,
            }
        } else {
            return {
                id: pergunta.id,
                ativo: pergunta.ativo,
                descricao: pergunta.descricao,
                pessimo: pergunta.pessimo,
                ruim: pergunta.ruim,
                regular: pergunta.regular,
                bom: pergunta.bom,
                excelente: pergunta.excelente,
            }
        }
    },

    renderMany(perguntas: Pergunta[]) {
        return perguntas.map(pergunta => this.render(pergunta))
    }
}