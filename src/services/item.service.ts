import { In } from "typeorm";
import { AppDataSource } from "../data-source";
import { Item } from "../entities/Item";
import tagService from "./tag.service";

class ItemService {
  async getItems() {
    const itemRepository = AppDataSource.getRepository(Item);
    const items = await itemRepository.find();
    return items;
  }

  async getItemById(id: number) {
    const itemRepository = AppDataSource.getRepository(Item);
    const item = await itemRepository.findOneBy({ id });
    return item;
  }

  async getItemByCategory(category: string) {
    const itemRepository = AppDataSource.getRepository(Item);
    const items = await itemRepository.find({
      where: { category: { name: category } },
    });
    return items;
  }

  async createItem(input: IAddItemArgs) {
    const { tags = [], category, supply, ...rest } = input;
    const itemRepository = AppDataSource.getRepository(Item);
    let item = new Item();

    const _tags = await tagService.getTagsByIds(tags.map((tag) => +tag));
    item.tags = _tags;
    item.category = null;

    const result = await itemRepository.save({ ...item, ...rest });
    return result;
  }

  async geItemsByIds(ids: number[]) {
    const itemRepository = AppDataSource.getRepository(Item);
    const items = await itemRepository.findBy({ id: In(ids) });
    return items;
  }
}

export default new ItemService();
