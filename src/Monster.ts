import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;
    if (damage <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= damage;
    }
    return this._lifePoints;
  }
}

export default Monster;
