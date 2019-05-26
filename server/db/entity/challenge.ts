import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Challenge extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'created_at',
    type: 'datetime',
    nullable: false,
  })
  createdAt!: Date;

  @Column({
    name: 'created_by',
    nullable: false,
  })
  createdBy!: number;

  @Column({
    name: 'is_active',
    default: true,
  })
  isActive!: boolean;

  @ManyToOne(() => User, (user) => user.id)
  author!: User;

}
