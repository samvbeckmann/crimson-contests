import { Monster } from '../../types/monster-bash-types';
import { getMonsterCost } from '../../utils/army-utils';

interface Props {
  monster: Monster;
}

export default function MonsterOptionCard({ monster }: Props): JSX.Element {
  return (
    <div className="border-2 rounded p-2">
      <div>
        <p className="text-lg font-bold text-slate-800">{monster.name}</p>
        <p className="text-sm text-slate-500">{`${getMonsterCost(monster).toLocaleString()} points`}</p>
      </div>
    </div>
  );
}
