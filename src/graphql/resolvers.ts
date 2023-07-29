import ItemService from "../services/item.service";
import TagService from "../services/tag.service";
import CategoryService from "../services/category.service";
import SupplyService from "../services/supply.service";

const resolvers = {
  Query: {
    items: async () => {
      return await ItemService.getItems();
    },
    tags: async () => {
      return await TagService.getTags();
    },
    categories: async () => {
      return await CategoryService.getCategories();
    },
    supplies: async () => {
      return await SupplyService.getSupplies();
    },
  },
  Mutation: {
    addTag: async (_, args: IAddTagArgs) => {
      const { label } = args;
      const newTag = await TagService.createTag(label);
      return newTag;
    },
    addItem: async (_, args: { input: IAddItemArgs }) => {
      const newItem = await ItemService.createItem(args.input);
      return newItem;
    },
  },
};

export default resolvers;
