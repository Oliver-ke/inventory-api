import ItemService from "../services/item.service";
import { tags } from "../data/mock";
import TagService from "../services/tag.service";

const resolvers = {
  Query: {
    tags: async () => {
      return await TagService.getTags();
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
