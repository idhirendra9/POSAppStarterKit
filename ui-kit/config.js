import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export const Environment = {
  width,
  height,
  isAndroid: Platform.OS === 'android',
};

export const Color = {
  white: 'white',
  black: 'black',
  lightBlack: '#878787',
  lightGrey: '#efefef',
};
