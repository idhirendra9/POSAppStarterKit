import React from 'react';
import {View, List, Text, Color} from 'ui-kit';

export default ({
  data,
  selectedCategory,
  closeModal = () => alert('Do Something!'),
  selectCategory = () => alert('Do Something!'),
}) => (
  <View f={1} ao={1} jc="center" onPress={closeModal}>
    <View e={3} mh={50} pv={12} br={12} bg="white">
      <Text fs={18} lh={22} ta="center">
        Select a Category
      </Text>
      <Text fs={12} lh={14} ta="center" mb={12}>
        (To view category specific data)
      </Text>
      <List
        data={data}
        footerComponent={
          <View
            style={{borderTopWidth: 1}}
            bc={Color.lightGrey}
            onPress={() => selectCategory('NONE')}>
            <Text
              fs={20}
              lh={24}
              fw={selectedCategory === 'NONE' ? '500' : '300'}
              mv={8}
              ta="center"
              c={selectedCategory === 'NONE' ? Color.black : Color.lightBlack}>
              Show all
            </Text>
          </View>
        }
        renderItem={({index, item}) => (
          <View key={index} onPress={() => selectCategory(item)}>
            <Text
              fs={20}
              lh={24}
              fw={item === selectedCategory ? '500' : '300'}
              mv={8}
              ta="center"
              c={item === selectedCategory ? Color.black : Color.lightBlack}>
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  </View>
);
