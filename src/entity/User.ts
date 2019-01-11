import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'varchar', length: '230' ,name:'nick_name'})
  nickName: string;

  @Column({length:100})
  password:string;

}
