import { isNumber } from 'util';
export default class PlayerService {
    private _hp: number = 100;

    public hp(): number {
        return this._hp;
    }
}
