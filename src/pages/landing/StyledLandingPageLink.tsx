import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

export default function StyledLandingPageLink({ to, children }: PropsWithChildren<Props>): JSX.Element {
  return (
    <Link
      to={to}
      className={clsx(
        'relative',
        'before:absolute',
        'before:w-full',
        'before:bottom-0',
				'before:left-0',
        'before:h-1',
        'before:bg-sky-400',
        'before:opacity-50',
        'hover:before:opacity-100'
      )}
    >
      {children}
    </Link>
  );
}
