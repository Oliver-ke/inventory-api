import { DataSource } from "typeorm";
import { Tag } from "./entities/Tag";
import { Category } from "./entities/Category";
import { Item } from "./entities/Item";
import { Supply } from "./entities/Supply";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./data/inventory-api",
  synchronize: true,
  logging: true,
  entities: [Tag, Category, Item, Supply],
});
