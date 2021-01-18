import React from 'react';
import {ActivityIndicator, Image} from 'react-native';
import {Color} from '../config';
import View from './View';

export default ({src, onPress, style, ao, containerStyle, local = false}) => (
  <View
    activeOpacity={ao || 0.8}
    onPress={onPress}
    bg="rgb(0, 0, 0, 0.16)"
    s={containerStyle}>
    {!!src ? (
      local ? (
        <Image style={[style]} source={src} />
      ) : (
        <Image
          style={[style]}
          source={{
            uri: src,
          }}
        />
      )
    ) : (
      <View ai="center" jc="center" style={[style]}>
        <ActivityIndicator size="small" color={Color.theme} />
      </View>
    )}
  </View>
);
