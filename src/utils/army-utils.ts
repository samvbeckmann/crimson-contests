import { Monster } from '../types/monster-bash-types';

const crToPointCost = (cr: number): number => {
  if (cr <= 0.5) {
    return 2;
  } else if (cr <= 2) {
    return 5;
  } else if (cr <= 4) {
    return 10;
  } else if (cr <= 6) {
    return 25;
  } else if (cr <= 8) {
    return 50;
  } else if (cr <= 10) {
    return 100;
  } else if (cr <= 12) {
    return 200;
  } else if (cr <= 15) {
    return 400;
  } else if (cr <= 19) {
    return 750;
  } else {
    return 1500;
  }
};

export const getMonsterCost = (monster: Monster): number => {
  if (monster.pointCostOverride !== undefined) {
    return Math.floor(monster.pointCostOverride);
  } else {
    return crToPointCost(monster.cr);
  }
};
