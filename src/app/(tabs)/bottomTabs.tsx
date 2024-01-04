import CompassIcon from '../../../assets/icons/CompassIcon';
import BoltIcon from '../../../assets/icons/BoltIcon';
import PersonCircleIcon from '../../../assets/icons/PersonCircleIcon';

export const bottomTabs = [
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
