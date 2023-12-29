export const theme = {
  primary500: '#BA0170',
  primary200: '#FF98D5',
  primary300: '#D667A9',
  primary400: '#C8348D',
  primary600: '#95015A',
  primary700: '#380022',
  gray500: '#4C4C4C',
  gray100: '#E6E6E6',
  gray200: '#CCCCCC',
  gray300: '#B3B3B3',
  gray400: '#808080',
  gray600: '#333333',
  gray700: '#191919',
  grayBackground: '#F6F6F6',
  whiteColor: '#FFFFFF',
  blackColor: '#000000',
  transparentColor: '#ffffff00',
  stateSuccessColor: '#61B774',
  stateWarningColor: '#E9CA5E',
  backgroundHoverColor: 'rgba("#C8348D", 0.06)',
  backgroundHoverGrayColor: 'rgba(230, 230, 230, 0.5)',
  readOnlyGrayColor: 'rgba(0, 0, 0, 0.06)',
  placeholderText: 'rgba(51, 51, 51, 0.6)',
  textfieldBackgroundColor: 'rgba(200, 52, 141, 0.12)',
  skeletonLoaderGrayColor: '#EFEFEF',
  stateErrorColor: '#EB4C4C',
  borderRadius: '12px',
  shadowDesktop: '0px 4px 4px rgba(#B68FBD, 0.06)',
  shadowMobile: {
    shadowColor: '#B68FBD',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 5,
  },
  typographyVariant: {
    h1: {
      fontSize: '56px',
      fontWeight: 700,
      fontFamily: 'Montserrat-Bold',
      lineHeight: '110%',
      letterSpacing: '-1.5%',
    },
    h2: {
      fontSize: '38px',
      fontWeight: 700,
      fontFamily: 'Montserrat-Bold',
      lineHeight: '-110%',
      letterSpacing: '-0.5%',
    },
    h3: {
      fontSize: '32px',
      fontWeight: 600,
      fontFamily: 'Montserrat-SemiBold',
      lineHeight: '110%',
    },
    h4: {
      fontSize: '25px',
      fontWeight: 600,
      fontFamily: 'Montserrat-SemiBold',
      lineHeight: '110%',
      letterSpacing: '0.25%',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: 'Montserrat-Medium',
      lineHeight: '110%',
      color: '#333333',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Montserrat-Medium',
      lineHeight: '110%',
      letterSpacing: '0.15%',
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: 300,
      fontFamily: 'Montserrat-Light',
      lineHeight: '110%',
      letterSpacing: '0.15%',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 300,
      fontFamily: 'Montserrat-Light',
      lineHeight: '110%',
      letterSpacing: '0.1%',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: 'Montserrat-Regular',
      lineHeight: '110%',
      letterSpacing: '0.5%',
    },
    body1Bold: {
      fontSize: '16px',
      fontWeight: 600,
      fontFamily: 'Montserrat-SemiBold',
      lineHeight: '110%',
      letterSpacing: '0.5%',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: 'Montserrat-Regular',
      lineHeight: '110%',
      letterSpacing: '0.25%',
    },
    body2Bold: {
      fontSize: '14px',
      fontFamily: 'Montserrat-SemiBold',
      fontWeight: 600,
      lineHeight: '110%',
      letterSpacing: '0.25%',
    },
    body3: {
      fontSize: '12px',
      fontWeight: 400,
      fontFamily: 'Montserrat-Regular',
      lineHeight: '110%',
      letterSpacing: '0.25%',
    },
    buttonSmall: {
      fontSize: '12px',
      fontWeight: 600,
      fontFamily: 'Montserrat-SemiBold',
      lineHeight: '20px',
      letterSpacing: '0.25%',
    },
    buttonStandard: {
      fontSize: '14px',
      fontWeight: 600,
      fontFamily: 'Montserrat-SemiBold',
      lineHeight: '24px',
      letterSpacing: '0.25%',
    },
    buttonLarge: {
      fontSize: '16px',
      fontWeight: 600,
      fontFamily: 'Montserrat-SemiBold',
      lineHeight: '28px',
      letterSpacing: '0.25%',
    },
    caption: {
      fontSize: '14px',
      fontWeight: 300,
      fontFamily: 'Montserrat-Light',
      lineHeight: '110%',
      letterSpacing: '0.4%',
    },
    overline: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: 'Montserrat-Regular',
      lineHeight: '110%',
      letterSpacing: '1.5%',
      textTransform: 'uppercase',
    },
    mini: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: 'Montserrat-Regular',
      lineHeight: '110%',
      color: '#333333',
      letterSpacing: '10%',
    },
  },
};
export type MyTheme = typeof theme;
