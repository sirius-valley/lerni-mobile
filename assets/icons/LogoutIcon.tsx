import Svg, { Path } from 'react-native-svg';
import { IconInterface } from './types';

export const LogoutIcon = ({ color = '#000C0F', size = 16 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.1723 3.31042H5.24137C4.91214 3.31042 4.59639 3.44121 4.36359 3.67401C4.13079 3.90682 4 4.22256 4 4.55179V19.4482C4 19.7775 4.13079 20.0932 4.36359 20.326C4.59639 20.5588 4.91214 20.6896 5.24137 20.6896H15.1723C15.5016 20.6896 15.8173 20.5588 16.0501 20.326C16.2829 20.0932 16.4137 19.7775 16.4137 19.4482V15.7241H10.5979C10.4333 15.7241 10.2754 15.6587 10.159 15.5423C10.0426 15.4259 9.97719 15.268 9.97719 15.1034C9.97719 14.9388 10.0426 14.7809 10.159 14.6645C10.2754 14.5481 10.4333 14.4827 10.5979 14.4827H16.4137V4.55179C16.4137 4.22256 16.2829 3.90682 16.0501 3.67401C15.8173 3.44121 15.5016 3.31042 15.1723 3.31042Z"
        fill={color}
      />
      <Path
        d="M18.3752 11.5531C18.2564 11.4514 18.1037 11.3983 17.9475 11.4043C17.7913 11.4104 17.6431 11.4751 17.5326 11.5857C17.422 11.6962 17.3573 11.8444 17.3512 12.0006C17.3452 12.1568 17.3983 12.3095 17.5 12.4283L19.5979 14.4827H16.4138V15.7241H19.5979L17.5 17.8717C17.435 17.9273 17.3823 17.9958 17.345 18.0728C17.3078 18.1498 17.2868 18.2337 17.2835 18.3192C17.2802 18.4046 17.2946 18.4899 17.3258 18.5695C17.357 18.6492 17.4044 18.7215 17.4649 18.782C17.5253 18.8425 17.5977 18.8898 17.6773 18.921C17.757 18.9522 17.8422 18.9666 17.9277 18.9633C18.0132 18.96 18.0971 18.9391 18.1741 18.9019C18.2511 18.8646 18.3195 18.8118 18.3752 18.7469L22 15.1469L18.3752 11.5531Z"
        fill={color}
      />
    </Svg>
  );
};
