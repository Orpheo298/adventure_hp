import * as angular from 'angular';

import PlayerService from './player.service';
import InventoryService from './inventory.service';

export default angular.module('app.services', [])
    .service('PlayerService', PlayerService)
    .service('InventoryService', InventoryService)
;
