import { Platform } from 'react-native';
const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#6f7173',
      textSubheading: '#f2f8ff',
      textPlaceholder: '#6e706f',
      primary: '#24292e',
      auxiliary: "#e84615",
      cardColor: '#b6b7b8',
      errorColor: '#d73a4a'
    },
    fontSizes: {
        auxiliary: 10,
        body: 14,
        subheading: 20,
    },
    fonts: {
      main: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;