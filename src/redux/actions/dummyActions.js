import {get} from 'lodash';
export const SET_LOADING = 'SET_LOADING';
export const ADD_BILL = 'ADD_BILL';
export const UPDATE_BILL = 'UPDATE_BILL';
export const DELETE_BILL = 'DELETE_BILL';

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const addBill = (payload) => ({
  type: ADD_BILL,
  payload,
});

const updateBill = (payload) => ({
  type: UPDATE_BILL,
  payload,
});

export const deleteBill = (payload) => ({
  type: DELETE_BILL,
  payload,
});

export const addBillRecord = (e) => async (dispatch, getState) => {
  try {
    const bills = get(getState().dummy, 'bills', []).length;
    const obj = {
      ...e,
      id: bills + 1,
      status: 'active',
      date: new Date(),
    };
    dispatch(addBill(obj));
  } catch (error) {
    console.log('addBillRecord - error', error);
  }
};

export const updateBillRecord = (e) => async (dispatch, getState) => {
  try {
    const obj = {
      ...e,
      date: new Date(),
    };
    dispatch(updateBill(obj));
  } catch (error) {
    console.log('addBillRecord - error', error);
  }
};
