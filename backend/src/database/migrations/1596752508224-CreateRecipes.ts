import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRecipes1596752508224 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'recipes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'picture',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'ingredients',
                        type: 'varchar'
                    },
                    {
                        name: 'steps',
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
                ]
            }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('recipes');
    }
}
