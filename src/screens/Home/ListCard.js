import React from 'react';
import {View, Text, Color} from 'ui-kit';
import {get} from 'lodash';
import moment from 'moment';

export default ({
  item = {},
  onPress = () => alert('Do Something!'),
  inactive = false,
}) => (
  <View
    row
    jc="space-between"
    br={12}
    ph={15}
    pv={12}
    mh={15}
    mv={8}
    e={3}
    bg={inactive ? Color.lightGrey : Color.white}
    onPress={() => onPress(item)}>
    <View jc="center" f={1} pr={8}>
      <Text
        fs={14}
        lh={16}
        fw={'500'}
        c={Color.lightBlack}
        f={1}
        numberOfLines={1}
        ellipsizeMode="tail">
        {get(item, 'category', '')}
      </Text>
      <Text
        fs={20}
        lh={24}
        fw={'300'}
        f={1}
        numberOfLines={2}
        ellipsizeMode="tail">
        {get(item, 'description', '')}
      </Text>
    </View>
    <View row ai="center">
      <Text fs={20} lh={24} fw={'300'}>
        ₹{get(item, 'amount', '')}
      </Text>
      <View h={'100%'} w={1} bg={Color.lightBlack} mh={8} />
      <View center>
        <Text fs={16} lh={22} fw={'200'} c={Color.lightBlack}>
          {moment(get(item, 'date', '')).format('DD/MM')}
        </Text>
        <Text fs={14} lh={22} fw={'400'} c={Color.lightBlack}>
          {moment(get(item, 'date', '')).format('h:mm a')}
        </Text>
      </View>
    </View>
  </View>
);
