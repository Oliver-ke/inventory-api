import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Item } from "./Item";

@Entity()
export class Supply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  receivedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Item, (item) => item.supply)
  items: Item[];
}
