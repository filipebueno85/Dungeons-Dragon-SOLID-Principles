import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monster: SimpleFighter[];

  constructor(player: Fighter, monster: Fighter[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monster = monster;
  }

  fight(): number {
    do {
      this._monster.forEach((monster) => {
        monster.attack(this._player);

        this._player.attack(monster);
      });
    } while (this._player.lifePoints !== -1 && this._monster
      .some((moster) => moster.lifePoints !== -1));
  
    return super.fight();
  }
}

export default PVE;