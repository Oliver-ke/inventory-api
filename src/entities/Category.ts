import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Item } from "./Item";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @OneToMany(() => Item, (item) => item.category)
  items: Item[];

  @CreateDateColumn()
  createdAt: Date;
}
