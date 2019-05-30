import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createCompletedChallengeTable1559226269822 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'completed_challenge',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      }, {
        name: 'program_id',
        type: 'int',
        isNullable: false,
      }, {
        name: 'challenge_id',
        type: 'int',
        isNullable: false,
      }, {
        name: 'completed_at',
        type: 'datetime',
        isNullable: false,
      }, {
        name: 'completed_by',
        type: 'int',
        isNullable: false,
      }]
    }));

    await queryRunner.createForeignKeys('completed_challenge', [
      new TableForeignKey({
        columnNames: ['program_id'],
        referencedTableName: 'program',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['challenge_id'],
        referencedTableName: 'challenge',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['completed_by'],
        referencedTableName: 'user',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable('completed_challenge');
    if (table) {
      await queryRunner.dropForeignKeys('completed_challenge', table.foreignKeys);
    }

    await queryRunner.dropTable('completed_challenge');
  }

}
