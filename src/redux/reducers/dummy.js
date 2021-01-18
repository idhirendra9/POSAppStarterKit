import {get, findIndex} from 'lodash';
import {
  SET_LOADING,
  ADD_BILL,
  UPDATE_BILL,
  DELETE_BILL,
} from '../actions/dummyActions';

const initialState = {
  isLoading: false,
  bills: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload};
    case ADD_BILL:
      return {...state, bills: [...get(state, 'bills', []), action.payload]};
    case UPDATE_BILL:
      let updateBillState = state.bills;
      const updateIndex = findIndex(
        updateBillState,
        (e) => e.id === action.payload.id,
      );
      updateBillState[updateIndex] = action.payload;
      return {...state, bills: updateBillState};
    case DELETE_BILL:
      let deleteBillState = state.bills;
      const deleteIndex = findIndex(
        deleteBillState,
        (e) => e.id === action.payload.id,
      );
      deleteBillState[deleteIndex] = {...action.payload, status: 'deleted'};
      return {...state, bills: deleteBillState};
    default:
      return state;
  }
};
