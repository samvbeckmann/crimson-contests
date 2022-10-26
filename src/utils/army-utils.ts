import { CR_POINT_MAPPING, OTHER_POINT_VALUE } from '../resources/cr-mapping';
import { Army, Monster } from '../types/monster-bash-types';
import { get } from 'lodash';

export const getMonsterCost = (monster: Monster): number => {
  if (monster.pointCostOverride !== undefined) {
    return Math.floor(monster.pointCostOverride);
  } else {
    return get(CR_POINT_MAPPING, monster.cr, OTHER_POINT_VALUE);
  }
};

export const getMonsterCrDisplay = (cr: number): string => {
  if (cr === 0.125) {
    return '⅛';
  } else if (cr === 0.25) {
    return '¼';
  } else if (cr === 0.5) {
    return '½';
  } else {
    return cr.toLocaleString();
  }
};

export const getArmyPoints = (army: Army): number =>
  army.monsters.reduce((count, monster) => count + getMonsterCost(monster.monster) * monster.count, 0);

export const getMonsterCount = (army: Army): number =>
  army.monsters.reduce((count, monster) => count + monster.count, 0);
