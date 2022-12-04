import clsx from 'clsx';
import { FunctionComponent } from 'react';
import MonsterIcon from '../../components/MonsterIcon';

interface Props {
  Icon: FunctionComponent;
  name: string;
  title: string;
  blurb: string;
  gradientClasses?: string;
}

export default function Testimonial({ Icon, name, title, blurb, gradientClasses }: Props): JSX.Element {
  return (
    <div className="rounded bg-slate-100 max-w-lg">
      <div className="flex items-stretch h-full">
        <div className={clsx('bg-gradient-to-br rounded-l shrink-0 flex items-end', gradientClasses)}>
          <MonsterIcon Icon={Icon} className="h-32 w-32" opacity="0.8" />
        </div>

        <div className="flex flex-col grow px-4 py-2">
          <span className="font-medium text-lg">{name}</span>
          <span className="text-sm text-slate-600">{title}</span>
          <div className="h-0.5 rounded bg-slate-300 my-2" />
          <span className="text-center">{blurb}</span>
        </div>
      </div>
    </div>
  );
}
