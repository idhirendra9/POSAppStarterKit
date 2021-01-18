import React from 'react';
import {TextInput} from 'react-native';
import {Color} from '../config';
import Text from './Text';
import View from './View';

export default Input = (props) => {
  const {
    row = false,
    text,
    placeholder,
    onChangeText = (e) => alert(e),
    style,
    mv = 14,
    inputStyle,
    field,
    description,
    example,
    isMultiline,
    isUnderline,
    titleStyle,
    c,
    tb,
    keyboardType = 'default',
    placeholderTextColor,
    e = null,
    bg = null,
    br = null,
  } = props;
  return (
    <View
      mv={mv}
      row={row}
      style={[row && {alignItems: 'center'}, style]}
      e={e}
      bg={bg}
      br={br}>
      {field && (
        <Text
          fs={16}
          lh={22}
          style={[row && {marginRight: 8}, titleStyle]}
          sb={tb}
          mb={2}>
          {field}
        </Text>
      )}

      {description && (
        <Text
          sb={isUnderline}
          mb={isUnderline && -5}
          c={isUnderline && c ? c : Color.black}
          fs={12}>
          {description}
        </Text>
      )}

      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={[
          {
            height: !!isMultiline ? 100 : 38,
            backgroundColor: '#f8f9fb',
            borderColor: '#707070',
            // borderWidth: 1,
            // borderRadius: 5,
            marginVertical: 4,
            padding: 0,
            paddingHorizontal: 8,
            borderRadius: 6,
          },
          isUnderline && {
            borderWidth: 0,
            borderBottomWidth: 1,
            borderRadius: 0,
            fontSize: 16,
            marginTop: 0,
            paddingHorizontal: 0,
          },
          isMultiline && {textAlignVertical: 'top', paddingTop: 5},
          row && {flex: 1},
          inputStyle,
        ]}
        placeholderTextColor={placeholderTextColor || Color.lightBlack}
        onChangeText={onChangeText}
        value={text}
        multiline={isMultiline}
      />

      {!!example && (
        <Text fs={12} lh={17}>
          {example}
        </Text>
      )}
    </View>
  );
};
