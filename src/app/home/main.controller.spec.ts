import MainController from './main.controller';
import PlayerService from '../services/player.service';
import createSpy from '../testing/createSpy';
import spy from '../testing/spy';

describe('Menu', function () {
    let playerService: PlayerService;

    beforeEach(inject(() => {
        playerService = createSpy(PlayerService, 'PlayerService');
        spy(playerService.hp).and.returnValue(100);
    }));

    it('un test :o', function() {
        const controller = new MainController(playerService);
        expect(controller.getHP()).toEqual(playerService.hp());
    });
});