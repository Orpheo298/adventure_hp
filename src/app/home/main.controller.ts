import PlayerService from '../services/player.service';

export default class MainController {
     public static $inject: string[] = ['PlayerService'];

     constructor(
        private playerService: PlayerService
    ) {}

    getHP() {
        return this.playerService.hp;
    }

}
