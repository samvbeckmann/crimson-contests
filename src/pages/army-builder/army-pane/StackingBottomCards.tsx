import { clsx } from 'clsx';

interface Props {
  count: number;
}

const CLASSES = ['mr-1 ml-1', 'mr-2 ml-2', 'mr-3 ml-3', 'mr-4 ml-4'];

export default function StackingBottomCards({ count }: Props): JSX.Element {
  const numBottomCards = Math.min(count - 1, 4);
  const array = Array(numBottomCards).fill(0);

  return (
    <>
      {array.map((_, index) => (
        <div
          className={clsx(
            'h-1',
            'border-2',
            'rounded-b',
            'border-t-0',
            'animate-in',
            'slide-in-from-top-2',
            'duration-100',
            CLASSES[index]
          )}
        />
      ))}
    </>
  );
}
