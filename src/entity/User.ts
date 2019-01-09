import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;


  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'bool', default: false })
  confirmed: boolean;

  @Column({ type: 'varchar', length: '230' })
  name: string;

  @Column()
  age: number;

}
