import React, {useState} from 'react';
import {Modal} from 'react-native';
import {sortBy, forEach, difference} from 'lodash';
import {View, Header, Input, List, Text, Icon, Color} from 'ui-kit';
import ListCard from './ListCard';

export default ({bills = []}) => {
  const [showModal, setShowModal] = useState(false);
  const [isPayModalVisible, setPayModal] = useState(false);
  const [budget, setBudget] = useState('');

  const budgetedList = getBills(bills, budget);
  return (
    <View>
      <View
        absolute
        h={50}
        w={50}
        br={25}
        e={6}
        bg={Color.white}
        center
        onPress={() => setShowModal(true)}
        style={{right: 30, bottom: 30}}>
        <Icon type="MaterialIcons" n="payment" s={25} />
      </View>
      <Modal
        animationType="slide"
        //   transparent={true}
        visible={showModal}
        presentationStyle="pageSheet"
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View f={1} bg={Color.lightGrey}>
          <Header t="Payment" />
          <View p={15} f={1}>
            <Input
              mv={8}
              style={{paddingHorizontal: 15, paddingVertical: 8}}
              bg={Color.white}
              br={8}
              e={3}
              field="Budget"
              placeholder="Budget"
              text={budget}
              keyboardType="number-pad"
              onChangeText={(e) => setBudget(e)}
            />
            <View scroll f={1} pb={100} scrollBar={false}>
              <List
                ccStyle={{paddingTop: 8}}
                data={budgetedList}
                renderItem={({index, item}) => (
                  <ListCard key={index} item={item} />
                )}
              />

              <List
                ccStyle={{paddingTop: 8}}
                data={difference(bills, budgetedList)}
                renderItem={({index, item}) => (
                  <ListCard inactive key={index} item={item} />
                )}
              />
            </View>

            <View row jc="space-between" mh={25} mv={25}>
              <View
                ph={15}
                pv={8}
                br={8}
                e={3}
                bg={Color.white}
                onPress={() => setShowModal(false)}>
                <Text fs={16} lh={22}>
                  Back
                </Text>
              </View>
              <View
                ph={15}
                pv={8}
                br={8}
                e={3}
                bg={Color.white}
                onPress={() => setPayModal(true)}>
                <Text fs={16} lh={22}>
                  Pay
                </Text>
              </View>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isPayModalVisible}>
                <View
                  f={1}
                  ao={1}
                  jc="center"
                  onPress={() => setPayModal(false)}>
                  <View e={3} mh={50} pv={12} br={12} bg="white">
                    <Text fs={18} lh={22} ta="center">
                      Under Development!
                    </Text>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

getBills = (bills, budget) => {
  let getBudgetBills = budget;
  let budgetedArray = [];
  const sortedArray = sortBy(bills, (e) => Number(e.amount));
  forEach(sortedArray, (e) => {
    getBudgetBills = Number(getBudgetBills) - Number(e.amount);
    if (getBudgetBills > 0) {
      budgetedArray.push(e);
    }
  });
  return budgetedArray;
};
