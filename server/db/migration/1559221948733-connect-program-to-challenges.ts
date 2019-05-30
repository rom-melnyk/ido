import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class connectProgramToChallenges1559221948733 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'program_challenge',
      columns: [{
        name: 'program_id',
        type: 'int',
        isNullable: false,
        isPrimary: true,
      }, {
        name: 'challenge_id',
        type: 'int',
        isNullable: false,
        isPrimary: true,
      }, {
        name: 'order',
        type: 'int',
        default: 10,
      }, {
        name: 'amount',
        type: 'int',
        default: 1,
      }]
    }));

    await queryRunner.createForeignKey('program_challenge', new TableForeignKey({
      columnNames: ['program_id'],
      referencedTableName: 'program',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('program_challenge', new TableForeignKey({
      columnNames: ['challenge_id'],
      referencedTableName: 'challenge',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable('program_challenge');
    if (table) {
      await queryRunner.dropForeignKeys('program_challenge', table.foreignKeys);
    }

    await queryRunner.dropTable('program_challenge');
  }

}
