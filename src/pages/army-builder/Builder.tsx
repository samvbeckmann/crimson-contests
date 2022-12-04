import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { GAMEMODES } from '../../resources/gamemodes';
import { Army, Gamemode, Monster } from '../../types/monster-bash-types';
import ArmyPane from './army-pane/ArmyPane';
import MonsterSelectionPane from './selection-pane/MonsterSelectionPane';

export default function (): JSX.Element {
  const [gamemode, setGamemode] = useState<Gamemode>(GAMEMODES[1]);
  const [army, setArmy] = useState<Army>({ name: '', monsters: [] });

  const incrementMonster = useCallback(
    (monToAdd: Monster) => {
      const existingMonsterIndex = army.monsters.findIndex((mon) => mon.monster.name === monToAdd.name);
      const newMonsterList = [...army.monsters];
      if (existingMonsterIndex !== -1) {
        newMonsterList.splice(existingMonsterIndex, 1, {
          monster: monToAdd,
          count: army.monsters[existingMonsterIndex].count + 1,
        });
      } else {
        newMonsterList.push({ monster: monToAdd, count: 1 });
      }
      setArmy({ ...army, monsters: newMonsterList });
    },
    [army]
  );

  const decrementMonster = useCallback(
    (monster: Monster) => {
      const existingMonsterIndex = army.monsters.findIndex((mon) => mon.monster.name === monster.name);
      const newMonsterList = [...army.monsters];
      if (existingMonsterIndex !== -1) {
        const newCount = army.monsters[existingMonsterIndex].count - 1;
        if (newCount > 0) {
          newMonsterList.splice(existingMonsterIndex, 1, { monster, count: newCount });
        } else {
          newMonsterList.splice(existingMonsterIndex, 1);
        }
        setArmy({ ...army, monsters: newMonsterList });
      }
    },
    [army]
  );

  const onChangeArmyName = useCallback(
    (name: string) => {
      setArmy({ ...army, name });
    },
    [army]
  );

  return (
    <div className="flex justify-center py-8 flex-grow max-h-full flex-auto overflow-hidden">
      <div className="flex flex-col shadow-xl rounded-xl bg-white h-full">
        <div className="flex gap-4 min-h-0 px-4 pb-2 pt-4 grow">
          <MonsterSelectionPane addMonster={incrementMonster} gamemode={gamemode} />
          <ArmyPane
            army={army}
            gamemode={gamemode}
            onChangeGamemode={setGamemode}
            onChangeArmyName={onChangeArmyName}
            incrementMonster={incrementMonster}
            decrementMonster={decrementMonster}
          />
        </div>
        <div
          className={clsx(
            'border-t-2',
            'border-orange-300',
            'px-4',
            'py-2',
            'text-xs',
            'font-medium',
            'text-slate-500',
            'flex',
            'justify-between'
          )}
        >
          <a href="https://twitter.com/samvbeckmann" className="hover:underline">
            <i className="fa-light fa-dice-d20" /> @samvbeckmann
          </a>
          <span>Built against Monster Mania ruleset Rev. 1</span>
        </div>
      </div>
    </div>
  );
}
