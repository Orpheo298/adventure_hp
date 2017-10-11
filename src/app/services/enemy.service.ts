import Enemy from './enemy';

export default class EnemyService {
    enemys: string[] = ['pitiponk'];
    enemyDictionary: Enemy[] = [];

    constructor() {
        let pitiponk = new Enemy();
        pitiponk.name = 'pitiponk';
        pitiponk.health = 10;
        pitiponk.damageAd = 10;
        pitiponk.attackSpeed = 0.5;

        this.enemyDictionary['pitiponk'] = pitiponk;

        console.log(this.enemyDictionary);
    }
}
