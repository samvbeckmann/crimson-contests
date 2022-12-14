export interface Monster {
  /**
   * Name of the monster.
   */
  name: string;
  /**
   * Challeng rating of the monster.
   */
  cr: number;
  /**
   * Point cost override of the monster.
   * If provided, overrides the normal CR formula for determining the point cost of this monster.
   */
  pointCostOverride?: number;
  /**
   * Link to the monster's statblock on D&D Beyond.
   */
  link?: string;
  /**
   * If true, the monster is banned from play, and cannot be added to an army.
   */
  banned?: boolean;
  /**
   * If true, this monster is a captain.
   */
  isCaptain?: boolean;

  /**
   * An optional note to explain something about the monster.
   */
  note?: string;
}

export enum CaptainMode {
  BANNED,
  REQUIRED,
  OPTIONAL,
}

export interface Gamemode {
  name: string;
  armyPoints: number;
  captainMode: CaptainMode;
  maxStatblocks: number;
  maxMonsters: number;
  minPointsPerMonster?: number;
  maxPointsPerMonster?: number;
  favorite?: boolean;
  note?: string;
  exampleArmy: ArmyItem[];
}

export interface ArmyItem {
  monster: Monster;
  count: number;
}

export interface Army {
  name: string;
  monsters: ArmyItem[];
}
