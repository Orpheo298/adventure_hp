import PlayerService from '../services/player.service';
import InventoryService from '../services/inventory.service';
import Item from '../services/item';

export default class StoreController {
    public static $inject: string[] = ['PlayerService', 'InventoryService'];

    private shopList: String[] = [];

    constructor(
        public playerService: PlayerService,
        public inventoryService: InventoryService
    ) {
        this.initShop();
    }

    initShop() {
        for (let key of this.inventoryService.items) {
            let item = this.inventoryService.itemDictionary[key];
            this.shopList.push(item);
        }
    }

    buyableItems(): String[] {
        return this.shopList;
    }

    buyItem(item: Item) {
        if (item.price > this.playerService.player.gold) {
            console.log('Not enough money.');
        } else {
            this.playerService.removeGold(item.price);
            //addToInventory(item);
        }
    }

    private addToInventory(item: Item) {

    }
}
