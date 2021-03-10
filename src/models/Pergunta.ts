import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('perguntas')
export default class Pergunta {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    descricao: string;

    @Column()
    ativo: boolean;

    @Column()
    classificacao: boolean;

    @Column()
    sim: number;

    @Column()
    nao: number;

    @Column()
    pessimo: number;

    @Column()
    ruim: number;

    @Column()
    regular: number;

    @Column()
    bom: number;

    @Column()
    excelente: number;
}