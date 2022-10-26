import clsx from 'clsx';

interface Props {
  num: number;
  den: number;
  title: string;
}

export default function ({ num, den, title }: Props): JSX.Element {
  const error = num > den;
  return (
    <div className='flex flex-col items-center'>
      <div className="w-32 h-16 relative mb-2">
        <p className={clsx('text-4xl absolute right-16 top-1', error ? 'text-red-700' : '')}>{num.toLocaleString()}</p>
        <p className="text-6xl text-slate-300 absolute right-12">/</p>
        <p className="text-lg absolute top-10 left-20 text-slate-600">{den.toLocaleString()}</p>
      </div>
			<span className="uppercase font-medium text-slate-600 text-xs tracking-wide">{title}</span>
    </div>
  );
}
