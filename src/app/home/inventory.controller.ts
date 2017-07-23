import PlayerService from '../services/player.service';
import InventoryService from '../services/inventory.service';
import Item from '../services/item';

export default class InventoryController {
    public static $inject: string[] = ['PlayerService', 'InventoryService'];

    private ownedList: Item[] = [];

 constructor(
        public playerService: PlayerService,
        public inventoryService: InventoryService
    ) {
        this.initInventory();
    }

    ownedItems(): Item[] {
        return this.ownedList;
    }

    private initInventory() {
        for (let key of this.inventoryService.items) {
            let item: Item = this.inventoryService.itemDictionary[key];
            if (item.quantity > 0) {
                this.ownedList.push(item);
            }
        }
    }
}
