import React, { ReactNode } from 'react';
import CompassIcon from '../../../assets/icons/CompassIcon';
import BoltIcon from '../../../assets/icons/BoltIcon';
import PersonCircleIcon from '../../../assets/icons/PersonCircleIcon';
import { IconInterface } from '../../../assets/icons/types';

interface BottomTab {
  id: string;
  name: string;
  screen: string;
  iconName: ReactNode;
  active?: boolean;
  roles?: string[];
}

export const bottomTabs: BottomTab[] = [
  {
    id: 'Profile',
    name: 'profile',
    screen: 'Perfil',
    iconName: <PersonCircleIcon />,
    active: true,
  },
  {
    id: 'Trivia',
    name: 'trivia',
    screen: 'Trivias',
    iconName: <BoltIcon />,
    active: true,
  },
  {
    id: 'Explorar',
    name: 'explore',
    screen: 'Explorar',
    iconName: <CompassIcon />,
    active: true,
  },
];
