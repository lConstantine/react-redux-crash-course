import { ADD_CUSTOMER, REMOVE_CUSTOMER } from './actionTypes'


export const addCustomerAction = customerData => ({
  type: ADD_CUSTOMER,
  payload: {
    customerData
  },
})

export const removeCustomerAction = customerData => ({
  type: REMOVE_CUSTOMER,
  payload: {
    customerData
  },
})

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addCustomerAction(json)))
  }
}