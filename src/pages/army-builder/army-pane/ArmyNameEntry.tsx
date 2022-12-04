import clsx from 'clsx';
import { sample } from 'lodash';
import { EXAMPLE_ARMY_NAMES } from '../../../resources/example-army-names';

interface Props {
  armyName: string;
  onChangeArmyName: (name: string) => void;
}

export default function ArmyNameEntry({ armyName, onChangeArmyName }: Props): JSX.Element {
  return (
    <div className='flex flex-col'>
      <span className="uppercase text-xs tracking-wide font-medium text-slate-700">Name your army</span>
      <input
        value={armyName}
        onChange={(event) => onChangeArmyName(event.target.value)}
        placeholder={sample(EXAMPLE_ARMY_NAMES)}
        className={clsx(
          'peer',
          'px-2',
          'py-1',
          'w-full',
          'text-3xl',
          'focus:outline-none',
        )}
      />
      <span className="border-b-2 rounded peer-focus:border-orange-500 transition-colors" />
    </div>
  );
}
