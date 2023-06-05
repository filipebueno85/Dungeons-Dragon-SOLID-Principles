import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _instance = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
