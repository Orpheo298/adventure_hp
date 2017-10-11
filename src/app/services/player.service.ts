import Player from './player';

export default class PlayerService {
    public static $inject: string[] = ['$interval'];

    public player: Player;
    private goldPerSecond: number = 1;

    constructor(private $interval: ng.IIntervalService) {
        this.player = new Player();
        this.$interval(() => this.mainLoop(), 1000);
    }

    public mainLoop() {
        console.log('mainLoop');
        this.increaseRessource();
    }

    increaseRessource() {
        this.player.gold = this.player.gold + this.goldPerSecond;
    }

    removeGold(gold: number) {
        this.player.gold = this.player.gold - gold;
    }
}
