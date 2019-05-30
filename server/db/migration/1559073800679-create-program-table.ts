import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createProgramTable1559073800679 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'program',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
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
      }, {
        name: 'planned_start',
        type: 'datetime',
        isNullable: false,
      }, {
        name: 'planned_end',
        type: 'datetime',
        isNullable: false,
      }, {
        name: 'started',
        type: 'datetime',
        isNullable: true,
      }, {
        name: 'finished',
        type: 'datetime',
        isNullable: true,
      }]
    }));

    await queryRunner.createForeignKey('program', new TableForeignKey({
      columnNames: ['created_by'],
      referencedTableName: 'user',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const programTable = await queryRunner.getTable('program');
    if (programTable) {
      const foreignKey = programTable.foreignKeys.find((fk) => fk.columnNames.indexOf('created_by') !== -1);
      if (foreignKey) {
        await queryRunner.dropForeignKey('program', foreignKey);
      }
    }

    await queryRunner.dropTable('program');
  }

}
