import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";

class CategoryService {
  async getCategories() {
    const categoryRepository = AppDataSource.getRepository(Category);
    return categoryRepository.find();
  }

  async getCategoryById(id: number) {
    const categoryRepository = AppDataSource.getRepository(Category);
    return categoryRepository.findOneBy({ id });
  }

  async deleteCategory(id: number) {
    const categoryRepository = AppDataSource.getRepository(Category);
    return categoryRepository.delete(id);
  }

  async createCategory(name: string) {
    const categoryRepository = AppDataSource.getRepository(Category);
    const newCategory = new Category();
    newCategory.name = name;

    return categoryRepository.save(newCategory);
  }
}

export default new CategoryService();
