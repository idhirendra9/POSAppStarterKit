import React from 'react';
import {View, Text, Color} from 'ui-kit';

export default ({selectedCategory, onPress}) => (
  <View row jc="space-between" mh={15} ai="center">
    {selectedCategory !== 'NONE' ? (
      <View row ai="center">
        <Text fs={14} lh={18} fw={'300'}>
          Category
        </Text>
        <View h={22} w={1} bg={Color.lightBlack} mh={12} />
        <Text fs={18} lh={24}>
          {selectedCategory}
        </Text>
      </View>
    ) : (
      <View />
    )}
    <View onPress={onPress} ripple pv={12} ph={10} br={6}>
      <Icon type="MaterialCommunityIcons" n="filter" s={24} />
    </View>
  </View>
);
