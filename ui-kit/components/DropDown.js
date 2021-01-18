import React, {useState} from 'react';
import View from './View';
import Icon from './Icon';
import Text from './Text';
import List from './List';
import {Color} from '../config';
import {log} from '../';
import {get, filter} from 'lodash';

export default ({
  onSelect = () => alert('Function not defined!'),
  data = null,
}) => {
  const [expanded, setExpanded] = useState(true);
  const [ratePlan, setRatePlan] = useState(null);
  if ((ratePlan === null || ratePlan === undefined) && data.length) {
    setRatePlan(data[0]);
    onSelect(data[0]);
  }

  const handlePress = () => setExpanded(!expanded);
  return (
    <View bg="white" mh={25} br={8}>
      <View
        style={{borderBottomWidth: 1}}
        bc={Color.themeBg}
        row
        ai="center"
        jc="space-between"
        h={44}
        pl={20}
        pr={10}
        onPress={handlePress}>
        <Text fs={16} lh={22} c={Color.black}>
          {get(ratePlan, 'text', '')}
        </Text>
        <View ml={10} mr={5}>
          <Icon
            n={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
            s={22}
            c={Color.black}
          />
        </View>
      </View>
      {expanded && (
        <List
          data={data}
          separatorComponent={() => <View h={1} bg={Color.themeBg} />}
          renderItem={({index, item}) => {
            if (get(ratePlan, 'id', '') === get(item, 'id', '')) return null;
            return (
              <View
                key={index}
                onPress={() => {
                  setRatePlan(item);
                  onSelect(item);
                }}
                h={36}
                jc="center"
                ph={20}
                style={
                  index === data.length - 1 && {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  }
                }>
                <Text c={Color.lightBlack}>{item.text}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};
