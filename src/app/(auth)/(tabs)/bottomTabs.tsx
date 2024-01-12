import React, { FC, ReactNode } from 'react';
import CompassIcon from '../../../../assets/icons/CompassIcon';
import BoltIcon from '../../../../assets/icons/BoltIcon';
import PersonCircleIcon from '../../../../assets/icons/PersonCircleIcon';
import { IconInterface } from '../../../../assets/icons/types';

interface BottomTab {
  id: string;
  name: string;
  screen: string;
  iconName: React.FC<IconInterface>;
  roles?: string[];
}

export const bottomTabs: BottomTab[] = [
  {
    id: 'Profile',
    name: 'Perfil',
    screen: 'profile',
    iconName: PersonCircleIcon,
  },
  {
    id: 'Trivia',
    name: 'Trivia',
    screen: 'trivia',
    iconName: BoltIcon,
  },
  {
    id: 'Explorar',
    name: 'Explorar',
    screen: 'explore',
    iconName: CompassIcon,
  },
];
