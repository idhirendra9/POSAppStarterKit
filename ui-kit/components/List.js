import React from 'react';
import {FlatList} from 'react-native';
import View from './View';

export default ({
  containerStyle,
  style = {},
  ccStyle = {},
  renderItem,
  data = [],
  horizontal = false,
  horizontalBar = false,
  numColumns = 1,
  initialNumToRender = 10,
  headerComponent = null,
  footerComponent = null,
  separatorComponent = null,
  emptyComponent = null,
  inverted = false,
  pullToLoad = null,
}) => (
  <View style={containerStyle}>
    <FlatList
      inverted={inverted}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={horizontalBar}
      numColumns={numColumns}
      initialNumToRender={initialNumToRender}
      style={style}
      contentContainerStyle={ccStyle}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ListHeaderComponent={headerComponent}
      ListFooterComponent={footerComponent}
      ListEmptyComponent={emptyComponent}
      ItemSeparatorComponent={separatorComponent}
      refreshControl={pullToLoad}
    />
  </View>
);
