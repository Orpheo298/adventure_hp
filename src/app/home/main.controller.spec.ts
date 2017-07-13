import MainController from './main.controller';
import PlayerService from '../services/player.service';
import createSpy from '../testing/createSpy';
import spy from '../testing/spy';

describe('Menu', function () {
    let playerService: PlayerService = new PlayerService();
    let $timeout: ng.ITimeoutService;

    beforeEach(inject(() => {
        //playerService = createSpy(PlayerService, 'PlayerService');
        //spy(playerService.hp).and.returnValue(100);
    }));

    it('un test :o', inject(function ($timeout) {
        /*const controller = new MainController($timeout, playerService);
        // flush timeout(s) for all code under test.
        $timeout.flush();
        // this will throw an exception if there are any pending timeouts.
        $timeout.verifyNoPendingTasks();

        expect(controller.player.hp).toEqual(playerService.hp);
        */
    }));
});
