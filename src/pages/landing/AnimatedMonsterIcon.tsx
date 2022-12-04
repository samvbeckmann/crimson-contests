import clsx from 'clsx';
import MonsterIcon from '../../components/MonsterIcon';
import { IconSize, MonsterIconType } from '../../types/monster-icon-types';
import { useRef } from 'react';

interface Props {
  icon: MonsterIconType;
  flipped?: boolean;
  offset: number;
}

export default function AnimatedMonsterIcon({ icon, offset, flipped }: Props): JSX.Element {
  const nodeRef = useRef(null);

  const sizeClass = (() => {
    switch (icon.size) {
      case IconSize.HUGE:
        return 'h-32 w-32';
      case IconSize.LARGE:
        return 'h-24 w-24';
      case IconSize.MEDIUM:
        return 'h-16 w-16';
      case IconSize.SMALL:
        return 'h-12 w-12';
      case IconSize.TINY:
        return 'h-6 w-6';
    }
  })();

  return (
    // <CSSTransition nodeRef={nodeRef} classNames="monster-icon" timeout={400} key={icon.name} appear>
    <MonsterIcon
      key={icon.name}
      Icon={icon.Icon}
      className={clsx(sizeClass, 'absolute')}
      style={{
        transitionProperty: 'translate',
        transitionDuration: '300ms',
        translate: flipped ? `${offset / 4}rem` : `calc(-${offset / 4}rem - 100%)`,
        animation: `slide-in ease-out 300ms, ${icon.flying && 'fly ease-in-out 4s infinite'}`,
      }}
      fill="white"
      flip={flipped}
    />
    // </CSSTransition>
  );
}
