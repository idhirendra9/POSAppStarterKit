import React, {PureComponent} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Color} from '../config';

export default (props) => {
  const {
    children,
    style,
    b,
    sb,
    medium,
    light,
    c,
    fw,
    h,
    fs,
    lh,
    ph,
    pv,
    mh,
    mv,
    m,
    p,
    ta,
    ul,
    mb,
    mt,
    pt,
    pb,
    pl,
    pr,
    ml,
    mr,
    italic,
    f,
  } = props;
  return (
    <Text
      {...props}
      style={[
        {
          color: Color.black,
          fontSize: 14,
          lineHeight: 19,
        },
        c && {color: c},
        fw && {fontWeight: fw},
        h && {fontSize: 18, lineHeight: 22},
        fs && {fontSize: fs},
        lh && {lineHeight: lh},
        ph && {paddingHorizontal: ph},
        pv && {paddingVertical: pv},
        mh && {marginHorizontal: mh},
        mv && {marginVertical: mv},
        p && {padding: p},
        pl && {paddingLeft: pl},
        pr && {paddingRight: pr},
        pt && {paddingTop: pt},
        pb && {paddingBottom: pb},
        mt && {marginTop: mt},
        mb && {marginBottom: mb},
        m && {margin: m},
        ml && {marginLeft: ml},
        mr && {marginRight: mr},
        ta && {textAlign: ta},
        ul && {textDecorationLine: 'underline'},
        italic && {fontStyle: 'italic'},
        f && {flex: f},
        style,
      ]}>
      {children}
    </Text>
  );
};
