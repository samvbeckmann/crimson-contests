import { Switch } from '@headlessui/react';
import clsx from 'clsx';

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ShowCaptainSwitch({ checked, onChange }: Props): JSX.Element {
  return (
    <Switch.Group>
      <div className={clsx('p-2', 'border-b', 'border-slate-200', 'flex', 'gap-2')}>
        <Switch
          checked={checked}
          onChange={onChange}
          className={`${
            checked ? 'bg-orange-400' : 'bg-slate-300'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
				<Switch.Label>Show Only Captains</Switch.Label>
      </div>
    </Switch.Group>
  );
}
