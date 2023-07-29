import { In } from "typeorm";
import { AppDataSource } from "../data-source";
import { Tag } from "../entities/Tag";

class TagService {
  async getTags() {
    const tagRepository = AppDataSource.getRepository(Tag);
    return tagRepository.find();
  }

  async getTagsByIds(ids: number[]) {
    const tagRepository = AppDataSource.getRepository(Tag);
    return tagRepository.find({ where: { id: In(ids) } });
  }

  async getTag(id: number) {
    const tagRepository = AppDataSource.getRepository(Tag);
    return tagRepository.findOne({ where: { id } });
  }

  async deleteTag(id: string) {
    const tagRepository = AppDataSource.getRepository(Tag);
    return tagRepository.delete(id);
  }

  async updateTag(id: number, label: string) {
    const tagRepository = AppDataSource.getRepository(Tag);
    const tag = await tagRepository.findOne({ where: { id } });
    tag.label = label;
    return tagRepository.save(tag);
  }

  async getTagsByLabel(label: string) {
    const tagRepository = AppDataSource.getRepository(Tag);
    return tagRepository.find({ where: { label } });
  }

  async createTag(label: string) {
    const tagRepository = AppDataSource.getRepository(Tag);
    const newTag = new Tag();
    newTag.label = label;

    return tagRepository.save(newTag);
  }
}

export default new TagService();
