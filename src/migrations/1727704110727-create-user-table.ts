import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1727704110727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'userName',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'role',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'country',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'birthDate',
                        type: 'date',
                        isNullable: true
                    },
                    {
                        name: 'createdAt',
                        type: 'date',
                        default: 'current_timestamp(6)'
                    },
                    {
                        name: 'updatedAt',
                        type: 'date',
                        default: 'current_timestamp(6)',
                        onUpdate: 'current_timestamp(6)'
                    }
                ]
            }), true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users', true);
    }

}
