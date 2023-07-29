import { AppDataSource } from "../data-source";
import { Supply } from "../entities/Supply";
import itemService from "./item.service";

class SupplyService {
  async getSupplies() {
    const supplyRepository = AppDataSource.getRepository(Supply);
    return await supplyRepository.find();
  }

  async getSupplyById(id: number) {
    const supplyRepository = AppDataSource.getRepository(Supply);
    return await supplyRepository.findOneBy({ id });
  }

  async getSupplyByReceivedBy(receivedBy: string) {
    const supplyRepository = AppDataSource.getRepository(Supply);
    return await supplyRepository.findOneBy({ receivedBy });
  }

  async createService(input: IAddSupplyArgs) {
    const { receivedBy, items } = input;
    const supplyRepository = AppDataSource.getRepository(Supply);
    const _items = await itemService.geItemsByIds(items.map((item) => +item));

    const supply = new Supply();
    supply.receivedBy = receivedBy;
    supply.items = _items;

    return await supplyRepository.save(supply);
  }
}

export default new SupplyService();
