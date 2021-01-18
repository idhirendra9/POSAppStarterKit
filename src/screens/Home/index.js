import React, {PureComponent} from 'react';
import {View, Header, Icon, List, Color} from 'ui-kit';
import {Modal} from 'react-native';
import {connect} from 'react-redux';
import {get, filter, forEach, uniq} from 'lodash';
import {DummyActions} from 'actions';
import BillForm from './BillForm';
import ListCard from './ListCard';
import CategoryList from './CategoryList';
import FilterView from './FilterView';
import PaymentModal from './PaymentModal';

class HomeScreen extends PureComponent {
  state = {
    isAddModalVisible: false,
    isFilterModalVisible: false,
    selectedBill: null,
    selectedCategory: 'NONE',
  };

  getData = (bills, selectedCategory) => {
    let filteredBills = filter(bills, (e) => e.status !== 'deleted');
    if (selectedCategory !== 'NONE')
      filteredBills = filter(
        filteredBills,
        (e) => e.category === selectedCategory,
      );
    return filteredBills;
  };

  getCategories = (bills) => {
    const data = filter(bills, (e) => e.status !== 'deleted');
    let categories = [];
    forEach(data, (e) => categories.push(e.category));
    return uniq(categories);
  };

  billAction = (type = '', data) => {
    const {addBillRecord, updateBillRecord, deleteBillRecord} = this.props;
    this.setState({isAddModalVisible: false, selectedBill: null});
    switch (type) {
      case 'add':
        addBillRecord(data);
        break;
      case 'update':
        updateBillRecord(data);
        break;
      case 'delete':
        deleteBillRecord(data);
        break;
      default:
        alert('Something went wrong!');
        break;
    }
  };

  render() {
    const {bills} = this.props;
    const {
      isAddModalVisible,
      isFilterModalVisible,
      selectedBill,
      selectedCategory,
    } = this.state;

    return (
      <View f={1} bg={Color.lightGrey}>
        <Header
          t="Dashboard"
          right={<Icon n="add" s={32} />}
          onPressRight={() => this.setState({isAddModalVisible: true})}
        />
        <List
          containerStyle={{flex: 1}}
          ccStyle={{paddingTop: 8, paddingBottom: 100}}
          data={this.getData(bills, selectedCategory)}
          headerComponent={
            <FilterView
              selectedCategory={selectedCategory}
              onPress={() => this.setState({isFilterModalVisible: true})}
            />
          }
          renderItem={({index, item}) => (
            <ListCard
              key={index}
              item={item}
              onPress={(selectedBill) => {
                this.setState({isAddModalVisible: true});
                this.setState({selectedBill});
              }}
            />
          )}
        />
        <PaymentModal bills={this.getData(bills, 'NONE')} />
        <Modal
          transparent={true}
          animationType="slide"
          visible={isFilterModalVisible}>
          <CategoryList
            data={this.getCategories(bills)}
            selectedCategory={selectedCategory}
            closeModal={() => this.setState({isFilterModalVisible: false})}
            selectCategory={(item) =>
              this.setState({
                isFilterModalVisible: false,
                selectedCategory: item,
              })
            }
          />
        </Modal>
        <Modal
          animationType="slide"
          //   transparent={true}
          visible={isAddModalVisible}
          presentationStyle="pageSheet">
          <BillForm
            data={selectedBill}
            closeModal={() => {
              this.setState({isAddModalVisible: false});
              this.setState({selectedBill: null});
            }}
            billAction={this.billAction}
          />
        </Modal>
      </View>
    );
  }
}

const reduxStates = (state) => ({
  bills: get(state.dummy, 'bills', []),
});

const reduxActions = (dispatch) => ({
  addBillRecord: (e) => dispatch(DummyActions.addBillRecord(e)),
  updateBillRecord: (e) => dispatch(DummyActions.updateBillRecord(e)),
  deleteBillRecord: (e) => dispatch(DummyActions.deleteBill(e)),
});

export default connect(reduxStates, reduxActions)(HomeScreen);
