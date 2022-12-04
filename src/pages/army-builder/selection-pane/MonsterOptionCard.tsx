import { clsx } from 'clsx';
import { Monster } from '../../../types/monster-bash-types';
import { getMonsterCost, getMonsterCrDisplay } from '../../../utils/army-utils';

interface Props {
  monster: Monster;
  addMonster: (monster: Monster) => void;
}

export default function MonsterOptionCard({ monster, addMonster }: Props): JSX.Element {
  return (
    <div className="border-2 rounded p-2 flex justify-between gap-2">
      <div>
        <p className="text-lg font-bold text-slate-800">
          {monster.name} {monster.isCaptain && <i className="fa-solid fa-crown fa-sm" />}
        </p>
        <p className="text-sm text-slate-500">
          CR {getMonsterCrDisplay(monster.cr)} - {`${getMonsterCost(monster).toLocaleString()} points`}
          {monster.pointCostOverride !== undefined ? '*' : ''}
        </p>
      </div>
      <button onClick={() => addMonster(monster)} className={clsx('hover:text-red-700 transition-colors')}>
        <i className="fa-regular fa-square-plus fa-2xl"></i>
      </button>
    </div>
  );
}
