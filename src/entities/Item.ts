import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Supply } from "./Supply";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @ManyToOne(() => Category, (cat) => cat.items)
  category?: Category;

  @ManyToOne(() => Supply, (supply) => supply.items)
  supply?: Supply;
}
