import Player from './player';

export default class PlayerService {

    public player: Player;
    private goldPerSecond: number = 1;

    constructor() {
        this.player = new Player();
    }

    increaseRessource() {
        this.player.gold = this.player.gold + this.goldPerSecond;
    }

    removeGold(gold: number) {
        this.player.gold = this.player.gold - gold;
    }
}
