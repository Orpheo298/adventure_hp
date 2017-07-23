import PlayerService from '../services/player.service';
import InventoryService from '../services/inventory.service';
import Item from '../services/item';

export default class StoreController {
    public static $inject: string[] = ['PlayerService', 'InventoryService'];

    private shopList: Item[] = [];

    constructor(
        public playerService: PlayerService,
        public inventoryService: InventoryService
    ) {
        this.initShop();
    }

    buyableItems(): Item[] {
        return this.shopList;
    }

    buyItem(item: Item) {
        if (item.price > this.playerService.player.gold) {
            console.log('Not enough money.');
        } else {
            this.playerService.removeGold(item.price);
            this.addToInventory(item);
        }
    }

    private initShop() {
        for (let key of this.inventoryService.items) {
            let item: Item = this.inventoryService.itemDictionary[key];
            this.shopList.push(item);
        }
    }

    private addToInventory(item: Item) {
        item.quantity += 1;
    }
}
