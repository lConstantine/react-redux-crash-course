import { ADD_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_CUSTOMER } from './actionTypes'


export const addCustomerAction = payload => ({
  type: ADD_CUSTOMER,
  payload,
})

export const addManyCustomersAction = payload => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
})

export const removeCustomerAction = payload => ({
  type: REMOVE_CUSTOMER,
  payload,
})

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCustomersAction(json)))
  }
}