import { ADD_CUSTOMER, REMOVE_CUSTOMER, CUSTOMER_ERROR } from './actionTypes'


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

const customerSuccsess = customerData => ({
  type: ADD_CUSTOMER,
  payload: {
    customerData
  }
})

const customerError = error => ({
  type: CUSTOMER_ERROR,
  payload: {
    error,
  }
})

export const fetchCustomers = () => {
  return async function (dispatch) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json()
      dispatch(customerSuccsess(json))
    } catch (err) {
      dispatch(customerError(err))
    }
  }
}