import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Challenge extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    name: 'created_at',
    type: 'datetime',
  })
  createdAt!: Date;

  @Column({
    name: 'created_by',
  })
  createdBy!: number;
}
