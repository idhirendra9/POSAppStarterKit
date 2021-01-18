import React from 'react';
import View from './View';
import Text from './Text';
import Icon from './Icon';
import {Color} from '../config';

export default (RadioButton = ({style, circle, isChecked, onPress, t = ''}) => (
  <View row ai="center" onPress={onPress} mv={4} style={[style]}>
    <View
      row
      bw={2}
      bc={'grey'}
      br={circle ? 10 : 5}
      ai="center"
      jc="center"
      h={20}
      w={20}>
      {isChecked ? (
        circle ? (
          <View bg={Color.black} br={5} h={11} w={11} />
        ) : (
          <Icon
            type="MaterialCommunityIcons"
            name="check"
            size={14}
            color={Color.black}
          />
        )
      ) : (
        <View />
      )}
    </View>
    {!!t && <Text ml={12}>{t}</Text>}
  </View>
));
