import clsx from 'clsx';

interface Props {}

export default function Header(props: Props): JSX.Element {
  return (
    <div className={clsx('border-b-2', 'border-orange-400', 'bg-white', 'px-4', 'py-2', 'flex', 'items-baseline')}>
      <span className={clsx('text-lg', 'text-slate-900', 'flex-grow')}>Crimson Contests: Monster Mania</span>
      <span className={clsx('text-sm', 'text-slate-700')}>Wow, there's nothing in this header yet!</span>
    </div>
  );
}
