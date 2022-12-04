import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Beholder from '../../resources/svgs/Beholder';
import GelatinousCube from '../../resources/svgs/GelatinousCube';
import Goblin from '../../resources/svgs/Goblin';
import Hydra from '../../resources/svgs/Hydra';
import Kobold from '../../resources/svgs/Kobold';
import MindFlayer from '../../resources/svgs/MindFlayer';
import LandingPageSection from './LandingPageSection';
import MonsterAnimation from './MonsterAnimation';
import StyledLandingPageLink from './StyledLandingPageLink';
import Testimonial from './Testimonial';
import MonsterInspector from './MonsterInspector';
import MonsterIcon from '../../components/MonsterIcon';
import RuleCard from './RuleCard';
import { GAMEMODES } from '../../resources/gamemodes';

export default function LandingPage(): JSX.Element {
  return (
    <div className={clsx('w-full', 'flex', 'flex-col')}>
      <div
        className={clsx(
          'bg-gradient-to-b',
          'from-red-700',
          'to-orange-600',
          'text-white',
          'flex',
          'flex-col',
          'items-center'
        )}
      >
        <Header subtleMode />
        <div className="max-w-3xl flex flex-col items-center gap-8 mt-12">
          <div className="text-2xl font-bold text-center">
            The Red Knight cordially invites you to assemble an army and prove your combat prowess in a game of...
          </div>
          <div className="text-6xl font-medium">Monster Mania!</div>
          <MonsterAnimation />
        </div>
      </div>

      <div className="flex justify-center py-20">
        <div className={clsx('hover:scale-105 duration-150', 'group', 'relative')}>
          <MonsterIcon
            Icon={Goblin}
            className={clsx(
              'absolute h-12 w-12',
              'left-8 -top-4',
              'group-hover:-translate-y-8 rotate-90 group-hover:rotate-0',
              'transition-transform duration-150'
            )}
            fill="#b91c1c"
          />
          <MonsterIcon
            Icon={Kobold}
            className={clsx(
              'absolute h-12 w-12',
              'right-8 -top-4',
              'group-hover:-translate-y-8 -rotate-90 group-hover:rotate-0',
              'transition-transform duration-150'
            )}
            fill="#b91c1c"
            flip
          />
          <Link
            to="/monster-mania/builder"
            className={clsx(
              'relative',
              'text-3xl font-bold text-white',
              'bg-gradient-to-br from-red-700 to-orange-600',
              'p-4 rounded shadow-lg',
              'transition-transform'
            )}
          >
            Join the Fray!
          </Link>
        </div>
      </div>
      <div className="w-full bg-slate-100 p-8">
        <div className="mx-auto max-w-3xl flex flex-col">
          <div className="text-3xl font-bold mb-4 text-center">Ever wondered if a beholder beats a dragon?</div>
          <div className="text-center text-lg">
            What about an army of kobolds vs a legion of goblins? Can a pair of mind flayers eat a vampire's brain?
            Well, it's time to find out! Monster Mania challenges two or more players to each build an army of monsters,
            then pit those armies against each other in a brutal contest to control three zones spread throughout an
            arena. When the dust settles, only one army will stand tall, having proven its worth to the Red Knight.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto my-16">
        <Testimonial
          Icon={Beholder}
          name="The Xanathar"
          title="Founder and CEO, Xanathar Guild"
          blurb="Monster Mania caught my eye a while ago, and it's had me charmed ever since."
          gradientClasses="from-orange-400 to-yellow-400"
        />
        <Testimonial
          Icon={Hydra}
          name="Lernie"
          title="Lernaean Hydra"
          blurb="4 out of 5 heads thoroughly recommend Monster Mania! (Phil is being stubborn, as usual)"
          gradientClasses="from-sky-500 to-sky-300"
        />
        <Testimonial
          Icon={MindFlayer}
          name="Karbolossk"
          title="Normal human, not a Mind Flayer"
          blurb="As juicy as a good brain, and more stunning than a psionic blast."
          gradientClasses="from-purple-400 to-fuchsia-400"
        />
        <Testimonial
          Icon={GelatinousCube}
          name="Bob"
          title="Sr. Dungeon Janitor"
          blurb="Glerb glup glug gork!"
          gradientClasses="from-green-400 to-lime-400"
        />
      </div>

      <div className="w-full py-8 bg-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold">Choose Your Fighters</div>
            <div className="text-lg">
              Beholders and Behirs? Owlbears and Orcs? Kraken and Kobolds? The choice is yours. Every monster costs a
              set number of points to add to your army, and it's up to you spend your points wisely in order to create
              the most deadly combat force the Red Knight has ever seen.
            </div>
            <MonsterInspector />
          </div>
        </div>
      </div>

      <div className="w-full py-8">
        <div className="mx-auto max-w-4xl grid grid-cols-2 items-stretch gap-8">
          <RuleCard rules={GAMEMODES[1]} className="bg-gradient-to-br from-orange-500 to-red-500" />
          <div className="flex flex-col gap-4 basis-1/2">
            <div className="text-3xl font-bold">Define the Rules of Engagement</div>
            <div className="text-lg">
              Whether you want a quick skirmish, a battle worthy of an epic, or a wild match-up of only tiny-sized
              monsters, there's a game for you. The objective is always the same, but different Rules of Engagement
              define how you build your army, ranging from squads of kobolds to legions of beholders.
            </div>
          </div>
          <RuleCard rules={GAMEMODES[2]} className="bg-gradient-to-br from-sky-400 to-violet-500" />
          <RuleCard rules={GAMEMODES[3]} className="bg-gradient-to-br from-yellow-500 to-orange-500" />
        </div>
      </div>

      <LandingPageSection className="text-slate-800">
        <div className="flex flex-col items-center gap-4">
          <div className="text-3xl font-bold">Arenas</div>
          <div>
            As important as your army is the terrain you'll be fighting on. Arenas can range from swinging between
            pirate ships to objectives in rooms filled with poison gas or instant death traps. Know your terrain, and
            build your army to thrive in it. Each DM may make their own, but check out the arenas page for some
            examples.
          </div>
        </div>
      </LandingPageSection>
      <LandingPageSection
        className={clsx('bg-gradient-to-r', 'from-rose-500', 'to-fuchsia-500', 'text-white', 'text-lg')}
      >
        <div className="flex flex-col items-center gap-8">
          <div>
            Ready to prove your worth to the Red Knight? Check out the{' '}
            <StyledLandingPageLink to="">full rules</StyledLandingPageLink>, take a closer look at some of the{' '}
            <StyledLandingPageLink to="monster-mania/arenas">arenas</StyledLandingPageLink>, and then head to the{' '}
            <StyledLandingPageLink to="monster-mania/builder">army builder</StyledLandingPageLink> to make the squad
            that you think can take down any enemy.
          </div>
          <div className="text-sm">
            <em>Monster Mania</em> is part of <em>The Crimson Contests</em>, a series of PvP games based on the 5e
            ruleset.
          </div>
        </div>
      </LandingPageSection>
    </div>
  );
}
