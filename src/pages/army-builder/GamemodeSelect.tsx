import { Gamemode } from '../../types/monster-bash-types';
import { Listbox, Transition } from '@headlessui/react';
import { GAMEMODES } from '../../resources/gamemodes';
import { Fragment } from 'react';
import { clsx } from 'clsx';

interface Props {
  gamemode: Gamemode;
  onChange: (gamemode: Gamemode) => void;
}

export default function GamemodeSelect({ gamemode, onChange }: Props): JSX.Element {
  return (
    <div className='relative w-full'>
      <span className='uppercase text-xs tracking-wide font-medium text-slate-700'>Select Gamemode</span>
      <Listbox value={gamemode} onChange={onChange}>
        <Listbox.Button className="relative w-full rounded bg-white py-2 pl-3 pr-10 text-left border-2">
          {gamemode.name}
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options
            className={clsx(
              'absolute',
              'z-10',
              'mt-1',
              'max-h-60',
              'w-full',
              'overflow-auto',
              'rounded-md',
              'bg-white',
              'py-1',
              'text-base',
              'shadow-lg',
              'ring-1',
              'ring-black',
              'ring-opacity-5',
              'focus:outline-none',
              'sm:text-sm',
            )}
          >
            {GAMEMODES.map((gamemode) => (
              <Listbox.Option
                key={gamemode.name}
                value={gamemode}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-red-100 text-red-900' : 'text-gray-900'
                  }`
                }
              >
                {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {gamemode.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                          <i className="fa-solid fa-check"></i>
                        </span>
                      ) : null}
                    </>
                  )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
