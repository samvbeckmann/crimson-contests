import { Army, Monster } from '../../../types/monster-bash-types';
import MonsterArmyCard from './MonsterArmyCard';

interface Props {
  army: Army;
  onIncrementMonster: (monster: Monster) => void;
  onDecrementMonster: (monster: Monster) => void;
}

export default function ({ army, onIncrementMonster, onDecrementMonster }: Props): JSX.Element {
  return (
    <div className='flex flex-col gap-2 overflow-y-scroll flex-grow'>
      {army.monsters.map((monster) => (
        <MonsterArmyCard
          key={monster.monster.name}
          monster={monster}
          onIncrementMonster={onIncrementMonster}
          onDecrementMonster={onDecrementMonster}
        />
      ))}
    </div>
  );
}
