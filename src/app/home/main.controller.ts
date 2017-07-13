import PlayerService from '../services/player.service';

export default class MainController {
    public static $inject: string[] = ['$interval', 'PlayerService'];

    constructor(
        private $interval: ng.IIntervalService,
        public playerService: PlayerService
    ) {
        this.$interval(() => this.mainLoop(), 1000);
    }

    public mainLoop() {
        this.playerService.increaseRessource();
    }
}
