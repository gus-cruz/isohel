import { query } from "express";
import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AlterForeignKeyRecipesToUsers1599954535810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('recipes',
            new TableColumn({
                name: 'user_id',
                type: 'uuid',
        }),
    );

        await queryRunner.createForeignKey('recipes',
            new TableForeignKey({
                name: 'UserRecipe',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
        }),
    );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('recipe', 'UserRecipe')

        await queryRunner.dropColumn('recipe', 'user_id');
    }

}
