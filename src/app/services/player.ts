export default class Player {
    public hp: number;
    public gold: number;
    public damageAd: number;
    public damageAp: number;
    public armor: number;
    public magicResist: number;

    constructor() {
        this.hp = 100;
        this.gold = 0;
        this.damageAd = 10;
        this.damageAp = 10;
        this.armor = 0;
        this.magicResist = 0;
    }
}
