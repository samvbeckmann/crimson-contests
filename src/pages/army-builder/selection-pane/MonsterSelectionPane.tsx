import clsx from 'clsx';
import { useMemo, useState } from 'react';
import SearchBox from '../../../components/SearchBox';
import { CR_POINT_MAPPING, OTHER_POINT_VALUE } from '../../../resources/cr-mapping';
import monsters from '../../../resources/monsters.json';
import { Gamemode, Monster } from '../../../types/monster-bash-types';
import { getMonsterCost } from '../../../utils/army-utils';
import MonsterOptionCard from './MonsterOptionCard';
import MonsterPointsSlider from './MonsterPointsSlider';
import ShowCaptainSwitch from './ShowCaptainSwitch';

interface Props {
  addMonster: (monster: Monster) => void;
  gamemode: Gamemode;
}

export default function MonsterSelectionPane({ addMonster, gamemode }: Props): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [pointsRange, setPointsRange] = useState<number[]>([0, 24]);
  const [onlyShowCaptains, setOnlyShowCaptains] = useState<boolean>(false);

  const minMonsterCost = CR_POINT_MAPPING[pointsRange[0]]?.points || OTHER_POINT_VALUE;
  const maxMonsterCost = CR_POINT_MAPPING[pointsRange[1]]?.points || OTHER_POINT_VALUE;

  const filteredMonsters: Monster[] = useMemo(
    () =>
      monsters.monsters.filter((monster) => {
        if (monster.banned) {
          return false;
        }
        if (!monster.name.toLowerCase().includes(query.toLowerCase())) {
          return false;
        }
        if (onlyShowCaptains && (monster.isCaptain === false || monster.isCaptain === undefined)) {
          return false;
        }
        const monsterCost = getMonsterCost(monster);
        if (gamemode.maxPointsPerMonster && monsterCost > gamemode.maxPointsPerMonster) {
          return false;
        }
        if (gamemode.minPointsPerMonster && monsterCost < gamemode.minPointsPerMonster) {
          return false;
        }
        if (monsterCost < minMonsterCost || monsterCost > maxMonsterCost) {
          return false;
        }
        return true;
      }),
    [query, pointsRange, onlyShowCaptains, gamemode]
  );

  return (
    <div className="w-[400] flex flex-col">
      <SearchBox value={query} onChange={setQuery} />

      <div className={clsx('rounded', 'bg-slate-100', 'mb-2')}>
        <ShowCaptainSwitch checked={onlyShowCaptains} onChange={setOnlyShowCaptains} />
        <MonsterPointsSlider value={pointsRange} onChange={setPointsRange} />
      </div>

      <div className="flex-col space-y-2 overflow-y-scroll">
        {filteredMonsters.map((monster) => (
          <MonsterOptionCard key={monster.name} monster={monster} addMonster={addMonster} />
        ))}
        {filteredMonsters.length === 0 && (
          <div className="p-4 bg-slate-50 rounded text-slate-500 font-medium text-center">
            No monsters found for this search.
          </div>
        )}
      </div>
    </div>
  );
}
