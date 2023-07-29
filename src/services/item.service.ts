import { AppDataSource } from "../data-source";
import { Item } from "../entities/Item";
import tagService from "./tag.service";

class ItemService {
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
}

export default new ItemService();
