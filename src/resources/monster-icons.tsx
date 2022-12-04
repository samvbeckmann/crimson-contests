import { IconSize, MonsterIconType } from '../types/monster-icon-types';
import Balor from './svgs/Balor';
import Beholder from './svgs/Beholder';
import BlackDragon from './svgs/BlackDragon';
import DisplacerBeast from './svgs/DisplacerBeast';
import ElderBrain from './svgs/ElderBrain';
import Flameskull from './svgs/Flameskull';
import GelatinousCube from './svgs/GelatinousCube';
import Gnoll from './svgs/Gnoll';
import Goblin from './svgs/Goblin';
import Hydra from './svgs/Hydra';
import Kobold from './svgs/Kobold';
import MindFlayer from './svgs/MindFlayer';
import Owlbear from './svgs/Owlbear';
import Phoenix from './svgs/Phoenix';
import RedDragon from './svgs/RedDragon';
import Skeleton from './svgs/Skeleton';
import Succubus from './svgs/Succubus';
import Unicorn from './svgs/Unicorn';
import Vampire from './svgs/Vampire';
import Wyvern from './svgs/Wyvern';

export const MONSTER_ICON_LIST: MonsterIconType[] = [
  {
    name: 'Balor',
    lookupName: 'Balor',
    size: IconSize.HUGE,
    flying: false,
    Icon: Balor,
  },
  {
    name: 'Beholder',
    lookupName: 'Beholder',
    size: IconSize.MEDIUM,
    flying: true,
    Icon: Beholder,
  },
  {
    name: 'Black Dragon',
    lookupName: 'Adult Black Dragon',
    size: IconSize.HUGE,
    flying: false,
    Icon: BlackDragon,
  },
  {
    name: 'Displacer Beast',
    lookupName: 'Displacer Beast',
    size: IconSize.LARGE,
    flying: false,
    Icon: DisplacerBeast,
  },
  {
    name: 'Elder Brain',
    lookupName: 'Elder Brain',
    size: IconSize.HUGE,
    flying: false,
    Icon: ElderBrain,
  },
  {
    name: 'Flameskull',
    lookupName: 'Flameskull',
    size: IconSize.TINY,
    flying: true,
    Icon: Flameskull,
  },
  {
    name: 'Gelatinous Cube',
    lookupName: 'Gelatinous Cube',
    size: IconSize.LARGE,
    flying: false,
    Icon: GelatinousCube,
  },
  {
    name: 'Gnoll',
    lookupName: 'Gnoll',
    size: IconSize.SMALL,
    flying: false,
    Icon: Gnoll,
  },
  {
    name: 'Goblin',
    lookupName: 'Goblin',
    size: IconSize.SMALL,
    flying: false,
    Icon: Goblin,
  },
  {
    name: 'Hydra',
    lookupName: 'Hydra',
    size: IconSize.HUGE,
    flying: false,
    Icon: Hydra,
  },
  {
    name: 'Kobold',
    lookupName: 'Kobold',
    size: IconSize.SMALL,
    flying: false,
    Icon: Kobold,
  },
  {
    name: 'Mind Flayer',
    lookupName: 'Mind Flayer',
    size: IconSize.MEDIUM,
    flying: false,
    Icon: MindFlayer,
  },
  {
    name: 'Owlbear',
    lookupName: 'Owlbear',
    size: IconSize.LARGE,
    flying: false,
    Icon: Owlbear,
  },
  {
    name: 'Phoenix',
    lookupName: 'Phoenix',
    size: IconSize.HUGE,
    flying: true,
    Icon: Phoenix,
  },
  {
    name: 'Red Dragon',
    lookupName: 'Adult Red Dragon',
    size: IconSize.HUGE,
    flying: false,
    Icon: RedDragon,
  },
  {
    name: 'Skeleton',
    lookupName: 'Skeleton',
    size: IconSize.MEDIUM,
    flying: false,
    Icon: Skeleton,
  },
  {
    name: 'Succubus',
    lookupName: 'Succubus/Incubus',
    size: IconSize.MEDIUM,
    flying: true,
    Icon: Succubus,
  },
  {
    name: 'Unicorn',
    lookupName: 'Unicorn',
    size: IconSize.LARGE,
    flying: false,
    Icon: Unicorn,
  },
  {
    name: 'Vampire',
    lookupName: 'Vampire',
    size: IconSize.MEDIUM,
    flying: false,
    Icon: Vampire,
  },
  {
    name: 'Wyvern',
    lookupName: 'Wyvern',
    size: IconSize.LARGE,
    flying: true,
    Icon: Wyvern,
  },
];
