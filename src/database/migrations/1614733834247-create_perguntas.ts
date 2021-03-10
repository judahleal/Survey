import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPerguntas1614733834247 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "perguntas",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        unsigned: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "descricao",
                        type: "text",
                    },
                    {
                        name: "ativo",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "classificacao",
                        type: "boolean",
                    },
                    {
                        name: "sim",
                        type: "number",
                        default: 0,
                    },
                    {
                        name: "nao",
                        type: "number",
                        default: 0,
                    },
                    {
                        name: "pessimo",
                        type: "number",
                        default: 0,
                    },
                    {
                        name: "ruim",
                        type: "number",
                        default: 0,
                    },
                    {
                        name: "regular",
                        type: "number",
                        default: 0,
                    },
                    {
                        name: "bom",
                        type: "number",
                        default: 0,
                    },
                    {
                        name: "excelente",
                        type: "number",
                        default: 0,
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("perguntas");
    }

}
