import Item from './item';

export default class InventoryService {
    items: string[] = ['potion'];
    itemDictionary: Item[] = [];

    constructor() {
        let potion: Item = new Item();
        potion.name = 'Potion';
        potion.buyable = true;
        potion.price = 2;
        potion.quantity = 0;

        this.itemDictionary['potion'] = potion;

        console.log(this.itemDictionary);
    }
}
