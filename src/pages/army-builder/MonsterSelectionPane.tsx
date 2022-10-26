import { useMemo, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import monsters from '../../resources/monsters.json';
import { Monster } from '../../types/monster-bash-types';
import MonsterOptionCard from './MonsterOptionCard';

interface Props {
  addMonster: (monster: Monster) => void;
}

export default function MonsterSelectionPane({ addMonster }: Props): JSX.Element {
  const [query, setQuery] = useState<string>('');

  const filteredMonsters: Monster[] = useMemo(
    () => monsters.filter((monster) => monster.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="w-[400] flex flex-col">
      <SearchBox value={query} onChange={setQuery} />

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
