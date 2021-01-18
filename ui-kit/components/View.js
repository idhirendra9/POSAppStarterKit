import React, {Fragment} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {Color, Environment} from '../config';

export default ({
  i,
  onPress,
  onLongPress,
  delayLongPress,
  scroll,
  children,
  f,
  row,
  jc,
  style,
  bg,
  m,
  mh,
  mv,
  mt,
  mb,
  pt,
  pb,
  pl,
  pr,
  ml,
  mr,
  p,
  ph,
  pv,
  br,
  bc,
  e,
  sw = 0,
  sc = Color.shadowColorBlack,
  so = 0.1,
  sr = 2,
  ai,
  as,
  ao,
  absolute,
  h,
  w,
  minH,
  bw,
  zi,
  r,
  b,
  center,
  ripple = false,
  rippleColor = 'rgba(0, 0, 0, .1)',
  ccStyle = {},
  enableKeyboardTaps = 'never',
  layout,
  rc = null,
  scrollBar = true,
}) => {
  const _View = scroll
    ? ScrollView
    : onPress || onLongPress
    ? ripple
      ? TouchableRipple
      : TouchableOpacity
    : View;
  return (
    <_View
      refreshControl={scroll && rc}
      key={i}
      activeOpacity={ao || 0.8}
      style={[
        row && {flexDirection: 'row'},
        f && {flex: f},
        h && {height: h},
        minH && {minHeight: minH},
        w && {width: w},
        absolute && {position: 'absolute'},
        bg && {backgroundColor: bg},
        jc && {justifyContent: jc},
        as && {alignSelf: as},
        ai && {alignItems: ai},
        m && {margin: m},
        mh && {marginHorizontal: mh},
        mv && {marginVertical: mv},
        p && {padding: p},
        ph && {paddingHorizontal: ph},
        pv && {paddingVertical: pv},
        pl && {paddingLeft: pl},
        pr && {paddingRight: pr},
        ml && {marginLeft: ml},
        mr && {marginRight: mr},
        mb && {marginBottom: mb},
        mt && {marginTop: mt},
        pt && {paddingTop: pt},
        pb && {paddingBottom: pb},
        br && {borderRadius: br},
        bc && {borderColor: bc},
        bw && {borderWidth: bw},
        e && {
          elevation: e,
          shadowOffset: {
            width: sw,
            height: e,
          },
          shadowOpacity: so,
          shadowRadius: sr,
          shadowColor: sc,
        },
        zi && {zIndex: zi},
        r && {right: r},
        b && {bottom: b},
        center && {justifyContent: 'center', alignItems: 'center'},
        style,
      ]}
      borderless={true}
      rippleColor={rippleColor}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}
      contentContainerStyle={ccStyle}
      keyboardShouldPersistTaps={enableKeyboardTaps && 'always'}
      onLayout={layout}
      showsVerticalScrollIndicator={scrollBar}>
      <Fragment>{children}</Fragment>
    </_View>
  );
};
