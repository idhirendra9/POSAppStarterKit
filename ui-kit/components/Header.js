import React from 'react';
import View from './View';
import {Color} from '../config';
import Text from './Text';
import Image from './Image';

export default ({
  style,
  navigation,
  back,
  onBackPress,
  img,
  t = '',
  b = '',
  theme,
  left,
  leftStyle,
  onPressLeft,
  right,
  floatRight,
  onPressRight,
  rightStyle,
  children,
  contentStyle,
  e = 4,
}) => (
  <View
    row
    h={50}
    ai="center"
    jc="space-between"
    bg="white"
    e={e}
    style={[theme && {backgroundColor: Color.theme}, style]}>
    {!children ? (
      <View row jc="space-between" h={'100%'} w={'100%'} style={contentStyle}>
        <View row ai="center" f={1}>
          {back && (
            <View
              ripple={true}
              jc="center"
              h={'100%'}
              br={5}
              mh={2}
              onPress={onBackPress || (() => navigation.goBack())}>
              <Icon
                n="chevron-back"
                s={30}
                c={theme ? 'white' : Color.black}
                style={{paddingHorizontal: 10}}
              />
            </View>
          )}
          {!!img && (
            <Image
              src={img}
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                marginRight: 8,
                resizeMode: 'cover',
              }}
            />
          )}
          {t && b ? (
            <View
              f={1}
              h={'100%'}
              pv={2}
              jc="center"
              style={[!back && {paddingHorizontal: 12}]}>
              <Text
                f={1}
                fs={16}
                c={theme ? 'white' : Color.black}
                lh={18}
                numberOfLines={1}
                ellipsizeMode="tail">
                {t}
              </Text>
              <Text
                f={1}
                fs={18}
                lh={20}
                sb
                c={theme ? 'white' : Color.black}
                numberOfLines={1}
                ellipsizeMode="tail">
                {b}
              </Text>
            </View>
          ) : b ? (
            <View f={1} style={[!back && {paddingHorizontal: 12}]}>
              <Text
                f={1}
                fs={12}
                lh={17}
                c={theme ? 'white' : Color.lightBlack}
                numberOfLines={2}
                ellipsizeMode="tail">
                {b}
              </Text>
            </View>
          ) : (
            <View f={1} style={[!back && {paddingHorizontal: 12}]}>
              <Text
                fs={20}
                lh={26}
                fw={'500'}
                style={{paddingBottom: 3}}
                // sb
                c={theme ? 'white' : Color.black}
                numberOfLines={1}
                ellipsizeMode="tail">
                {t}
              </Text>
            </View>
          )}
        </View>

        {!!left && (
          <View
            ripple={true}
            ai="center"
            jc="center"
            ph={6}
            mh={2}
            mv={2}
            br={5}
            style={[
              {
                left: 0,
              },
              leftStyle,
            ]}
            onPress={onPressLeft}>
            {left}
          </View>
        )}
        {!!right && (
          <View
            ripple={true}
            ai="center"
            jc="center"
            ph={left ? 6 : 12}
            mh={left ? 2 : 5}
            mr={left && 8}
            mv={2}
            br={5}
            style={[
              {
                right: 0,
              },
              rightStyle,
            ]}
            onPress={onPressRight}>
            {right}
          </View>
        )}

        {!!floatRight && (
          <View
            z={1}
            e={6}
            absolute
            bg="white"
            h={50}
            w={50}
            br={25}
            ai="center"
            jc="center"
            style={[
              {
                right: 30,
                top: 18,
              },
              rightStyle,
            ]}
            onPress={onPressRight}>
            {floatRight}
          </View>
        )}
      </View>
    ) : (
      children
    )}
  </View>
);
