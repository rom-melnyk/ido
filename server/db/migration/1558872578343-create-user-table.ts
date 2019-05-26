import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createUserTable1558872578343 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'user',
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
        name: 'email',
        type: 'varchar',
        isNullable: false,
      }, {
        name: 'hash',
        type: 'varchar',
        isNullable: false,
      }]
    }));

    await queryRunner.createForeignKey('challenge', new TableForeignKey({
      columnNames: ['created_by'],
      referencedColumnNames: ['id'],
      referencedTableName: 'user',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const challengeTable = await queryRunner.getTable('challenge');
    if (challengeTable) {
      const foreignKey = challengeTable.foreignKeys.find((fk) => fk.columnNames.indexOf('created_by') !== -1);
      if (foreignKey) {
        await queryRunner.dropForeignKey('challenge', foreignKey);
      }
    }

    await queryRunner.dropTable('user');
  }

}
