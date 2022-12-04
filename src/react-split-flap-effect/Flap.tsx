import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  bottom?: boolean;
  animated?: boolean;
  final?: boolean;
  hinge?: boolean;
}

export const Flap = ({ bottom, animated, final, hinge, children }: PropsWithChildren<Props>) => {
  const classes = clsx(
    'split-flap',
    bottom ? 'split-flap-bottom' : 'split-flap-top',
    animated && 'split-flap-animated',
    final && 'split-flap-final'
  );
  return (
    <div className={classes}>
      {children}
      {hinge && <div className="split-flap-hinge" data-kind="hinge" />}
    </div>
  );
};
