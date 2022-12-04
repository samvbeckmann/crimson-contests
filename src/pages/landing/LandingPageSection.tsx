import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

/**
 * Basic section for the landing page.
 */
export default function LandingPageSection({ className, children }: PropsWithChildren<Props>): JSX.Element {
  return (
    <div className={clsx('py-8', 'flex', 'flex-col', 'items-center', className)}>
      <div className={clsx('max-w-3xl')}>{children}</div>
    </div>
  );
}
