import clsx from 'clsx';

interface Props {}

export default function ArmyOptionsRow(props: Props): JSX.Element {
  return (
    <div className={clsx('flex', 'items-end', 'justify-end', 'border-t-2', 'pt-2')}>
      <button
        className={clsx('shadow-md', 'bg-orange-400', 'text-white', 'rounded', 'px-2', 'py-1', 'hover:bg-orange-500')}
      >
        Print Army
      </button>
    </div>
  );
}
