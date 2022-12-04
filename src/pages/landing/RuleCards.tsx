import { GAMEMODES } from '../../resources/gamemodes';
import RuleCard from './RuleCard';

export default function RuleCards(): JSX.Element {
  return (
    <div className="basis-1/2 flex flex-col gap-2">
			<RuleCard rules={GAMEMODES[1]} className="bg-gradient-to-br from-orange-500 to-red-500" />
			<RuleCard rules={GAMEMODES[2]} className="bg-gradient-to-br from-sky-400 to-violet-500" />
			<RuleCard rules={GAMEMODES[3]} className="bg-gradient-to-br from-yellow-500 to-orange-500" />
    </div>
  );
}
