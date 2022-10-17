import { useMemo, useState } from 'react';
import monsters from '../../resources/monsters.json';
import { Monster } from '../../types/monster-bash-types';
import MonsterOptionCard from './MonsterOptionCard';

interface Props {}

export default function MonsterSelectionPane(props: Props): JSX.Element {
  const [query, setQuery] = useState<string>('');

  const filteredMonsters: Monster[] = useMemo(
    () => monsters.filter((monster) => monster.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div>
      <input onChange={(event) => setQuery(event.target.value)} value={query}></input>
      <div className='flex-col space-y-2'>
        {filteredMonsters.map((monster) => (
          <MonsterOptionCard monster={monster} />
        ))}
      </div>
    </div>
  );
}
