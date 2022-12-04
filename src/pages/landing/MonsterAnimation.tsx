import { random, sample, sampleSize } from 'lodash';
import { useEffect, useState } from 'react';
import { MONSTER_ICON_LIST } from '../../resources/monster-icons';
import { IconSize, MonsterIconType } from '../../types/monster-icon-types';
import AnimatedMonsterIcon from './AnimatedMonsterIcon';

const MONSTER_CHANGE_INTERVAL = 3_000;

function getUniqueMonster(current: MonsterIconType[]): MonsterIconType {
  let newMonster: MonsterIconType;
  do {
    newMonster = sample(MONSTER_ICON_LIST) as MonsterIconType;
  } while (current.some((monster) => monster.name === newMonster?.name));
  return newMonster;
}

function sizeToOffset(size: IconSize): number {
  switch (size) {
    case IconSize.HUGE:
      return 32;
    case IconSize.LARGE:
      return 24;
    case IconSize.MEDIUM:
      return 16;
    case IconSize.SMALL:
      return 12;
    case IconSize.TINY:
      return 6;
  }
}

function getOffset(offsettingIcons: MonsterIconType[]): number {
  return offsettingIcons.reduce((prev, curr) => prev + sizeToOffset(curr.size), 0);
}

export default function MonsterAnimation(): JSX.Element {
  const [displayMonsters, setDisplayedMonsters] = useState<MonsterIconType[]>(sampleSize(MONSTER_ICON_LIST, 6));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const indexToSwap = random(displayMonsters.length - 1);
      const newMonster = getUniqueMonster(displayMonsters);
      const newDisplay = [...displayMonsters];
      newDisplay[indexToSwap] = newMonster;
      setDisplayedMonsters(newDisplay);
    }, MONSTER_CHANGE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [displayMonsters]);

  return (
    <div className="w-full flex items-end h-40">
      <div className="flex grow items-end justify-right absolute right-1/2 pr-12">
        <AnimatedMonsterIcon
          icon={displayMonsters[0]}
          offset={getOffset(displayMonsters.slice(1, 3))}
        />
        <AnimatedMonsterIcon
          icon={displayMonsters[1]}
          offset={getOffset(displayMonsters.slice(2, 3))}
        />
        <AnimatedMonsterIcon icon={displayMonsters[2]} offset={0} />
      </div>
      <i className="fa-regular fa-landmark-dome text-6xl absolute left-1/2 -translate-x-2/4" />
      <div className="flex grow items-end absolute left-1/2 pl-12">
        <AnimatedMonsterIcon icon={displayMonsters[3]} flipped offset={0} />
        <AnimatedMonsterIcon
          icon={displayMonsters[4]}
          flipped
          offset={getOffset(displayMonsters.slice(3, 4))}
        />
        <AnimatedMonsterIcon
          icon={displayMonsters[5]}
          flipped
          offset={getOffset(displayMonsters.slice(3, 5))}
        />
      </div>
    </div>
  );
}
