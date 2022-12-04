import { useEffect, useState } from 'react';
import { FlapDigit } from './FlapDigit';

// Set these three values as one state var
// to avoid in-between render states
const InitialCursor = {
  current: -1,
  previous: -1,
  target: 0,
};

interface Props {
  stack: string[];
  value: string;
  timing?: number;
  mode: string;
  hinge: boolean;
}

export const FlapStack = ({ stack, value, timing, ...restProps }: Props) => {
  const [cursor, setCursor] = useState(InitialCursor);

  useEffect(() => {
    setCursor(InitialCursor);
  }, [stack]);

  useEffect(() => {
    let { current, previous } = cursor;
    const target = Math.max(stack.indexOf(value), 0);

    const increment = () => {
      previous = current;
      if (current >= stack.length - 1) {
        current = 0;
      } else {
        current = current + 1;
      }

      setCursor({
        current,
        previous,
        target,
      });
    };

    increment();

    const timer = setInterval(() => {
      if (current === target) {
        clearInterval(timer);
      } else {
        increment();
      }
    }, timing);

    return () => clearInterval(timer);
  }, [stack, value]);

  const { current, previous, target } = cursor;
  return <FlapDigit value={stack[current]} prevValue={stack[previous]} final={current === target} {...restProps} />;
};
