import clsx from 'clsx';

interface Props {}

export default function ArmyOptionsRow(props: Props): JSX.Element {
  return (
    <div className={clsx('flex', 'items-end', 'border-t-2', 'pt-2')}>
      <button className={clsx('border-2 border-red-800 text-red-800 rounded px-2 py-1')}>Print Army</button>
    </div>
  );
}
