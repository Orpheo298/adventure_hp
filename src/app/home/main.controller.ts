import PlayerService from '../services/player.service';

export default class MainController {
    public static $inject: string[] = ['PlayerService'];

    constructor(public playerService: PlayerService) {
        console.log('MainController');
    }
}
