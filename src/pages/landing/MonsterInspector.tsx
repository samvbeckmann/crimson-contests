import clsx from 'clsx';
import { useMemo, useState } from 'react';
import MonsterIcon from '../../components/MonsterIcon';
import { FlapDisplay, Presets } from '../../react-split-flap-effect';
import { MONSTER_ICON_LIST } from '../../resources/monster-icons';
import monsters from '../../resources/monsters.json';
import { MonsterIconType } from '../../types/monster-icon-types';
import { getMonsterCost } from '../../utils/army-utils';

export default function MonsterInspector(): JSX.Element {
  const [hoveredMonster, setHoveredMonster] = useState<MonsterIconType | undefined>();
  const monsterPointCost = useMemo(() => {
    if (hoveredMonster) {
      const matchedMonster = monsters.monsters.find((monster) => monster.name === hoveredMonster.lookupName);
      if (matchedMonster) {
        return getMonsterCost(matchedMonster);
      }
    }
    return null;
  }, [hoveredMonster]);

  return (
    <div
      className={clsx(
        'rounded-xl',
        'bg-gradient-to-b',
        'from-slate-800',
        'to-slate-700',
        'p-8',
        'shadow-lg',
        'shrink-0'
      )}
    >
      <div className="mb-4 flex justify-between items-start">
        <div
          className={clsx(
            'font-mono font-bold text-slate-400 tracking-wide',
            'border-2 border-slate-400 rounded',
            'px-4 py-1',
            'flex flex-col items-end'
          )}
        >
          <div>POINT</div>
          <div>CALCULATOR</div>
        </div>
        <div className="flex flex-col items-end">
          <FlapDisplay
            chars={Presets.ALPHANUM}
            length={15}
            value={hoveredMonster?.name || ''}
            hinge={false}
            padMode="start"
          />
          <FlapDisplay
            chars={Presets.ALPHANUM}
            length={8}
            value={monsterPointCost ? `${monsterPointCost} pts` : ''}
            hinge={false}
            padMode="start"
          />
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4">
        {MONSTER_ICON_LIST.map((monster) => (
          <div
            onMouseEnter={() => setHoveredMonster(monster)}
            onMouseLeave={() => setHoveredMonster(undefined)}
            className={clsx('opacity-50', 'hover:opacity-100', 'transition-opacity')}
          >
            <MonsterIcon Icon={monster.Icon} className="h-12 w-12" fill="white" />
          </div>
        ))}
      </div>
    </div>
  );
}
