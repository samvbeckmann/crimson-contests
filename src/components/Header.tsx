import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

interface Props {
  subtleMode?: boolean;
}

const headerLinks = [
  {
    name: 'Rules',
    path: '/monster-mania/rules',
  },
  {
    name: 'Army Builder',
    path: '/monster-mania/builder',
  },
  {
    name: 'Arenas',
    path: '/monster-mania/arenas',
  },
  {
    name: 'About',
    path: '/about',
  },
];

export default function Header({ subtleMode }: Props): JSX.Element {
  return (
    <div
      className={clsx(
        subtleMode ? 'text-white' : 'border-b-2 border-orange-400 bg-white',
        'px-8 py-2',
        'flex items-baseline justify-between',
        'w-full'
      )}
    >
      <Link
        to="/"
        className={clsx('text-xl font-black', 'pr-8', subtleMode && 'transition-opacity opacity-75 hover:opacity-100')}
      >
        Crimson Contests
      </Link>
      <div className={clsx('flex', 'gap-4')}>
        {headerLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.path}
            className={({ isActive }) =>
              clsx(
                'font-medium',
                isActive && 'text-orange-600',
                subtleMode && 'transition-opacity opacity-75 hover:opacity-100'
              )
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
