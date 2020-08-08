import {
    MigrationInterface, 
    QueryRunner, 
    Table, 
    TableColumn
} from "typeorm";

export class CreateIngredientsAndSteps1596849867685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'recipe_ingredients',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'recipe_id',
                        type: 'uuid'
                    },
                    {
                        name: 'ingredient',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'IngredientRecipe',
                        referencedTableName: 'recipes',
                        referencedColumnNames: ['id'],
                        columnNames: ['recipe_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'recipe_steps',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'recipe_id',
                        type: 'uuid'
                    },
                    {
                        name: 'step',
                        type: 'varchar'
                    },
                    {
                        name: 'number',
                        type: 'integer'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'StepRecipe',
                        referencedTableName: 'recipes',
                        referencedColumnNames: ['id'],
                        columnNames: ['recipe_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );

        await queryRunner.dropColumn('recipes', 'ingredients');
        await queryRunner.dropColumn('recipes', 'steps');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('recipe_ingredients');
        await queryRunner.dropTable('recipe_steps');

        await queryRunner.addColumn('recipes', new TableColumn({
            name: 'ingredients',
            type: 'varchar'
        }));

        await queryRunner.addColumn('recipes', new TableColumn({
            name: 'steps',
            type: 'varchar'
        }));
    }

}
