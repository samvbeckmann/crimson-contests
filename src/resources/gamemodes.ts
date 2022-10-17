import { CaptainMode, Gamemode } from '../types/monster-bash-types';

export const GAMEMODES: Gamemode[] = [
  {
    name: 'Blood War',
    armyPoints: 1000,
    captainMode: CaptainMode.REQUIRED,
    maxStatblocks: 10,
    maxMonsters: 30,
  },
  {
    name: "Cambian Crusade",
    armyPoints: 500,
    captainMode: CaptainMode.REQUIRED,
    maxStatblocks: 7,
    maxMonsters: 25,
  },
  {
    name: 'Bulette Brawl',
    armyPoints: 100,
    captainMode: CaptainMode.BANNED,
    maxStatblocks: 6,
    maxMonsters: 20,
  },
  {
    name: 'Kobold Clash',
    armyPoints: 200,
    captainMode: CaptainMode.BANNED,
    maxStatblocks: 5,
    maxMonsters: 30,
    maxPointsPerMonster: 10,
  },
];
