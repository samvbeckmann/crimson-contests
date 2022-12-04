import React from 'react';

export interface MonsterIconType {
  Icon: React.FunctionComponent;
  flying: boolean;
  name: string;
  size: IconSize;
  lookupName: string;
}

export enum IconSize {
  HUGE,
  LARGE,
  MEDIUM,
  SMALL,
	TINY
}
