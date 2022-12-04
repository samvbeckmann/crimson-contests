import clsx from 'clsx';
import { getTrackBackground, Range } from 'react-range';
import { CR_POINT_MAPPING, OTHER_POINT_VALUE } from '../../../resources/cr-mapping';

interface Props {
  value: number[];
  onChange: (newRange: number[]) => void;
}

const NUM_OPTIONS = CR_POINT_MAPPING.length;

export default function MonsterPointsSlider({ value, onChange }: Props): JSX.Element {
  const minPoints = CR_POINT_MAPPING[value[0]]?.points || OTHER_POINT_VALUE;
  const maxPoints = CR_POINT_MAPPING[value[1]]?.points || OTHER_POINT_VALUE;

  return (
    <div className="w-full px-2 my-2">
      <div className={clsx('text-xs', 'uppercase', 'text-slate-700', 'font-medium', 'mb-1')}>Point Cost</div>
      <Range
        min={0}
        max={NUM_OPTIONS}
        values={value}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className={clsx('rounded', 'h-1.5', 'mx-4', 'mb-4', 'mt-8')}
            style={{
              background: getTrackBackground({
                values: value,
                colors: ['#cbd5e1', '#fb923c', '#cbd5e1'],
                min: 0,
                max: NUM_OPTIONS,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div {...props} className={clsx('flex', 'flex-col', 'items-center')}>
            <div className={clsx('absolute', 'bottom-5')}>{(index === 0 ? minPoints : maxPoints).toLocaleString()}</div>
            <div
              className={clsx(
                'h-5',
                'w-5',
                'rounded-full',
                'bg-white',
                'border-[6px]',
                'border-orange-400',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-offset-0',
                'ring-blue-400',
                'ring-opacity-50'
              )}
            />
          </div>
        )}
      />
    </div>
  );
}
