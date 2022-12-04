import { clsx } from 'clsx';
import { Army, CaptainMode, Gamemode } from '../../../types/monster-bash-types';

interface Props {
  gamemode: Gamemode;
  army: Army;
}

const countCaptains = (army: Army): number => {
  let numCaptains = 0;
  army.monsters.forEach((monster) => (monster.monster.isCaptain ? (numCaptains += monster.count) : null));
	return numCaptains;
};

export default function CaptainIndicator({ gamemode, army }: Props): JSX.Element {
  const iconElement = (() => {
		const numCaptains = countCaptains(army);
    switch (gamemode.captainMode) {
      case CaptainMode.BANNED:
        return (
          <span className={clsx("fa-stack fa-2xl", numCaptains > 0 && 'text-red-700 fa-fade')}>
            <i className="fa-regular fa-crown fa-stack-1x" />
            <i className="fa solid fa-ban fa-stack-2x opacity-75 text-slate-700" />
          </span>
        );
      case CaptainMode.OPTIONAL:
        if (numCaptains === 1) {
          return <i className="fa-solid fa-crown fa-2xl" />;
        } else if (numCaptains > 1) {
          return <i className="fa-solid fa-crown fa-2xl fa-fade text-red-700" />;
        } else {
          return <i className="fa-regular fa-crown fa-2xl" />;
        }
			case CaptainMode.REQUIRED:
        if (numCaptains === 1) {
          return <i className="fa-solid fa-crown fa-2xl" />;
        } else if (numCaptains > 1) {
          return <i className="fa-solid fa-crown fa-2xl fa-fade text-red-700" />;
        } else {
          return <i className="fa-regular fa-crown fa-2xl text-red-700" />;
        }
    }
  })();

  return <div className="mr-10">{iconElement}</div>;
}
