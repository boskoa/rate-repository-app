import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#000000',
    appBarColor: '#24292e',
    appBarText: '#ffffff',
    button: '#0366d6',
    mainBackground: '#e1e4e8',
    repositoryItemBackground: '#ffffff',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default : 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  paddings: {
    flexContainer: 10,
    buttons: 8,
  },
};

export default theme;