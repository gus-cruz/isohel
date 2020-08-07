import {MigrationInterface, QueryRunner, TableColumn, Table} from "typeorm";
import { query } from "express";

export default class AlterPictureRecipes1596766957922 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('recipes', 'picture');

        await queryRunner.addColumn('recipes', new TableColumn({
            name: 'picture',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('recipes', 'picture');

        await queryRunner.addColumn('recipes', new TableColumn({
            name: 'picture',
            type: 'varchar'
        }));
    }

}
