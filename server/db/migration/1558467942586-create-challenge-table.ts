import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createChallengeTable1558467942586 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'challenge',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
      }, {
        name: 'name',
        type: 'varchar',
        isNullable: false,
      }, {
        name: 'created_at',
        type: 'datetime',
        isNullable: false,
      }, {
        name: 'created_by',
        type: 'int',
        isNullable: false,
      }, {
        name: 'is_active',
        type: 'boolean',
        default: true,
      }]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('challenge');
  }

}
