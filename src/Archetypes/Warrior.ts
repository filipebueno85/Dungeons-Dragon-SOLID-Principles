import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _instance = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
