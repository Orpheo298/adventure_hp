import PlayerService from '../services/player.service';
import InventoryService from '../services/inventory.service';

export default class StoreController {
    public static $inject: string[] = ['$interval', 'PlayerService', 'InventoryService'];

    constructor(
        private $interval: ng.IIntervalService,
        public playerService: PlayerService,
        public inventoryService: InventoryService
    ) {
        
    }



}