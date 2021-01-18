import React, {useState} from 'react';
import {View, Header, Text, Input, Color} from 'ui-kit';
import {get, hasIn} from 'lodash';

export default ({
  closeModal = () => 'Do Something!',
  billAction = () => 'Do Something!',
  data = {},
}) => {
  const [description, setDescription] = useState(get(data, 'description', ''));
  const [category, setCategory] = useState(get(data, 'category', ''));
  const [amount, setAmount] = useState(get(data, 'amount', ''));
  const modalType = hasIn(data, 'id') ? 'Update/Delete' : 'Add';
  return (
    <View f={1} bg={Color.lightGrey}>
      <Header t={`${modalType} Bill`} />
      <View p={15} f={1}>
        <Input
          mv={8}
          style={{paddingHorizontal: 15, paddingVertical: 8}}
          bg={Color.white}
          br={8}
          e={3}
          field="Description"
          placeholder="Description"
          text={description}
          onChangeText={(e) => setDescription(e)}
        />
        <Input
          mv={8}
          style={{paddingHorizontal: 15, paddingVertical: 8}}
          bg={Color.white}
          br={8}
          e={3}
          field="Category"
          placeholder="Category"
          text={category}
          onChangeText={(e) => setCategory(e)}
        />
        <Input
          mv={8}
          style={{paddingHorizontal: 15, paddingVertical: 8}}
          bg={Color.white}
          br={8}
          e={3}
          field="Amount"
          placeholder="Amount"
          text={amount}
          keyboardType="number-pad"
          onChangeText={(e) => setAmount(e)}
        />
      </View>
      <View row jc="space-between" mh={25} mv={25}>
        <View ph={15} pv={8} br={8} e={3} bg={Color.white} onPress={closeModal}>
          <Text fs={16} lh={22}>
            Cancel
          </Text>
        </View>

        {hasIn(data, 'id') && (
          <View
            ph={15}
            pv={8}
            br={8}
            e={3}
            bg={Color.white}
            onPress={() => billAction('delete', data)}>
            <Text fs={16} lh={22}>
              Delete
            </Text>
          </View>
        )}

        <View
          ph={15}
          pv={8}
          br={8}
          e={3}
          bg={Color.white}
          onPress={() => {
            if (description.length && category.length && amount.length) {
              billAction(hasIn(data, 'id') ? 'update' : 'add', {
                id: get(data, 'id', null),
                description,
                category,
                amount,
              });
            } else alert('Please fill all the fields.');
          }}>
          <Text fs={16} lh={22}>
            {hasIn(data, 'id') ? 'Update' : 'Add'}
          </Text>
        </View>
      </View>
    </View>
  );
};
