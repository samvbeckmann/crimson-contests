import { Army, Gamemode, Monster } from '../../../types/monster-bash-types';
import ArmyNameEntry from './ArmyNameEntry';
import ArmyOptionsRow from './ArmyOptionsRow';
import BuilderHeader from './BuilderHeader';
import CurrentArmyDisplay from './CurrentArmyDisplay';
import GamemodeSelect from './GamemodeSelect';

interface Props {
  army: Army;
  gamemode: Gamemode;
  onChangeArmyName: (name: string) => void;
  onChangeGamemode: (gamemode: Gamemode) => void;
  incrementMonster: (monster: Monster) => void;
  decrementMonster: (monster: Monster) => void;
}

export default function ArmyPane({
  army,
  gamemode,
  onChangeArmyName,
  onChangeGamemode,
  decrementMonster,
  incrementMonster,
}: Props): JSX.Element {
  return (
    <div className="border rounded p-4 flex flex-col w-[600] gap-4">
      <ArmyNameEntry armyName={army.name} onChangeArmyName={onChangeArmyName} />
      <GamemodeSelect gamemode={gamemode} onChange={onChangeGamemode} />
      <BuilderHeader gamemode={gamemode} army={army} onChangeArmyName={() => {}} />
      <CurrentArmyDisplay army={army} onDecrementMonster={decrementMonster} onIncrementMonster={incrementMonster} />
      <ArmyOptionsRow />
    </div>
  );
}
