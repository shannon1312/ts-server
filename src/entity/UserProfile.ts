import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  BaseEntity
} from "typeorm";
import { User } from "./User";

@Entity()
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 名字
  @Column({
    type: "character varying",
    length: 50,
    nullable: false,
    name: "full_name"
  })
  fullName: string;

  // 性别
  @Column()
  sex: boolean;

  @Column({
    type: "enum",
    enum: ["STUDENT", "SALER", "PROGROMMER"],
    name: "job_type"
  })
  jobType: string;

  @Column({ length: 255 })
  address: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
