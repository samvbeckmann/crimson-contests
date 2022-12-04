import clsx from 'clsx';
import { Gamemode } from '../../types/monster-bash-types';

interface Props {
  rules: Gamemode;
  className?: string;
}

export default function ({ rules, className }: Props): JSX.Element {
  return (
    <div className={clsx('rounded flex flex-col shadow-lg', className)}>
      <div className="px-4 py-2 bg-black/25 rounded-t text-slate-100">
        <div className="flex items-baseline justify-between">
          <div className={clsx('font-bold', 'text-xl')}>{rules.name}</div>
          <div className="font-medium opacity-75">{rules.armyPoints} point army</div>
        </div>
        <div>{rules.note}</div>
      </div>
      <div className={clsx('grid', 'grid-cols-2', 'gap-2 p-4')}>
        {rules.exampleArmy.map((combatant) => (
          <div
            className={clsx(
              'bg-white/75 shadow-lg',
              'hover:bg-white',
              'transition-colors',
              'rounded',
              'p-2',
              'flex',
              'gap-2'
            )}
          >
            <div className="font-bold opacity-75">{combatant.count}x</div>
            <div className="">{combatant.monster.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
