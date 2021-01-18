import React from 'react';
import {Color} from '../config';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default (Icon = ({
  type = Ionicons,
  n = 'alert',
  s = 14,
  c = Color.theme,
  style = null,
}) => {
  const IconType = getIconType(type);
  return <IconType name={n} size={s} color={c} style={style} />;
});

const getIconType = type => {
  switch (type) {
    case 'Ionicons':
      return Ionicons;
      break;
    case 'Entypo':
      return Entypo;
      break;
    case 'Feather':
      return Feather;
      break;
    case 'FontAwesome':
      return FontAwesome;
      break;
    case 'FontAwesome5':
      return FontAwesome5;
      break;
    case 'Foundation':
      return Foundation;
      break;
    case 'MaterialIcons':
      return MaterialIcons;
      break;
    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons;
      break;
    case 'Octicons':
      return Octicons;
      break;
    case 'SimpleLineIcons':
      return SimpleLineIcons;
      break;
    case 'Zocial':
      return Zocial;
      break;
    case 'EvilIcons':
      return EvilIcons;
      break;
    default:
      return Ionicons;
  }
};
