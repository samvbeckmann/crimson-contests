import { ArmyItem, Monster } from '../../types/monster-bash-types';
import { getMonsterCost, getMonsterCrDisplay } from '../../utils/army-utils';
import StackingBottomCards from './StackingBottomCards';

interface Props {
  monster: ArmyItem;
  onIncrementMonster: (monster: Monster) => void;
  onDecrementMonster: (monster: Monster) => void;
}

export default function ({ monster, onIncrementMonster, onDecrementMonster }: Props): JSX.Element {
  return (
    <div>
      <div className="border-2 rounded p-2 flex justify-between items-center gap-2">
        <div className="flex flex-col flex-grow">
          <span className="font-bold text-lg">
            {monster.monster.name} {monster.monster.isCaptain && <i className="fa-solid fa-crown"></i>}
          </span>
          <span className="text-sm text-slate-700">CR {getMonsterCrDisplay(monster.monster.cr)} - {getMonsterCost(monster.monster).toLocaleString()} points each</span>
        </div>
        <div className="flex flex-col text-slate-700 items-center">
          <span className="text-3xl font-medium">{monster.count}x</span>
          <span className="text-sm">({(getMonsterCost(monster.monster) * monster.count).toLocaleString()} points)</span>
        </div>
        <div className="flex flex-col gap-2">
          <button
            disabled={monster.monster.isCaptain}
            className="hover:text-red-700 transition-colors duration-300 disabled:text-slate-400"
            onClick={() => onIncrementMonster(monster.monster)}
          >
            <i className="fa-regular fa-square-plus fa-xl"></i>
          </button>
          <button
            className="hover:text-red-700 transition-colors duration-300"
            onClick={() => onDecrementMonster(monster.monster)}
          >
            <i className="fa-regular fa-square-minus fa-xl"></i>
          </button>
        </div>
      </div>
      <StackingBottomCards count={monster.count} />
    </div>
  );
}
