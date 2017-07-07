import * as angular from 'angular';

import PlayerService from './player.service';

export default angular.module('app.services', [])
    .service('PlayerService', PlayerService)
;
