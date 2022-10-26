import Fraction from '../../components/Fraction';
import { Army, Gamemode } from '../../types/monster-bash-types';
import { getArmyPoints, getMonsterCost, getMonsterCount } from '../../utils/army-utils';
import CaptainIndicator from './CaptainIndicator';

interface Props {
  gamemode?: Gamemode;
  army: Army;
  onChangeArmyName: (name: string) => void;
}

export default function ({ gamemode, army }: Props): JSX.Element | null {
  if (gamemode) {
    return (
      <div className="flex bg-slate-50 rounded items-center px-4 py-1 justify-between">
        <CaptainIndicator gamemode={gamemode} army={army} />
        <Fraction num={getArmyPoints(army)} den={gamemode.armyPoints} title="Army Points"/>
        <Fraction num={army.monsters.length} den={gamemode.maxStatblocks} title="Statblocks"/>
        <Fraction num={getMonsterCount(army)} den={gamemode.maxMonsters} title="Total Monsters"/>
      </div>
    );
  } else {
    return null;
  }
}
