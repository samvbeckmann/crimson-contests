import { CaptainMode, Gamemode, Monster } from '../types/monster-bash-types';
import monsters from './monsters.json';

const getMonster = (name: string): Monster => {
  const monster = monsters.monsters.find((monster) => monster.name === name);
  if (monster) {
    return monster;
  } else {
    return monsters.monsters[0];
  }
};

export const GAMEMODES: Gamemode[] = [
  {
    name: 'Blood War',
    armyPoints: 1000,
    captainMode: CaptainMode.REQUIRED,
    maxStatblocks: 10,
    maxMonsters: 30,
    exampleArmy: [],
  },
  {
    name: 'Cambian Crusade',
    armyPoints: 500,
    captainMode: CaptainMode.OPTIONAL,
    maxStatblocks: 7,
    maxMonsters: 25,
    favorite: true,
    exampleArmy: [
      {
        count: 1,
        monster: getMonster('Star Spawn Larva Mage')
      },
      {
        count: 2,
        monster: getMonster('Star Spawn Hulk')
      },
      {
        count: 5,
        monster: getMonster('Star Spawn Mangler')
      },
      {
        count: 10,
        monster: getMonster('Star Spawn Grue')
      },
      {
        count: 2,
        monster: getMonster('Mind Flayer')
      },
    ],
    note: 'A battle for the ages. Grab a captain, and monsters up to CR 15 are common.'
  },
  {
    name: 'Bulette Brawl',
    armyPoints: 100,
    captainMode: CaptainMode.BANNED,
    maxStatblocks: 6,
    maxMonsters: 20,
    favorite: true,
    exampleArmy: [
      {
        count: 1,
        monster: getMonster('Young Bronze Dragon'),
      },
      {
        count: 1,
        monster: getMonster('Young Copper Dragon'),
      },
      {
        count: 5,
        monster: getMonster('Helmed Horror'),
      },
      {
        count: 2,
        monster: getMonster('Gargoyle'),
      },
      {
        count: 1,
        monster: getMonster('Swarm of Insects'),
      },
    ],
    note: "A classic battle. No captains, most monster are under CR 10."
  },
  {
    name: 'Kobold Clash',
    armyPoints: 80,
    captainMode: CaptainMode.BANNED,
    maxStatblocks: 5,
    maxMonsters: 40,
    maxPointsPerMonster: 4,
    exampleArmy: [      {
      count: 10,
      monster: getMonster('Ogre'),
    },
    {
      count: 10,
      monster: getMonster('Pixie'),
    },
    {
      count: 5,
      monster: getMonster('Griffon'),
    },
    {
      count: 10,
      monster: getMonster('Duodrone'),
    },],
    note: 'Battle of the little guys, all monsters must be worth 4 or fewer points.'
  },
];
