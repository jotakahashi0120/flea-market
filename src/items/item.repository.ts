import { Item } from "src/entities/item.entity";
import { EntityRepository, Repository } from "typeorm";
import { ItemStatus } from "./item-status.enum";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
    async createItem(CreateItemDto): Promise<Item> {
        const { name, price, description } = CreateItemDto;
        const item = this.create({
            name,
            price,
            description,
            status: ItemStatus.ON_SALE,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
        await this.save(item);
        return item;
    }
}