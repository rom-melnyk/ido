import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Challenge } from './challenge';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: false,
  })
  name!: string;

  @Column({
    nullable: false,
  })
  email!: string;

  @Column({
    nullable: false,
  })
  hash!: string;

  @OneToMany(() => Challenge, (challenge) => challenge.createdBy)
  challenges!: Challenge[];
}
