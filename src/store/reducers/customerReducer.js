import { ADD_CUSTOMER, REMOVE_CUSTOMER } from '../actions/actionTypes'

const defaultState = {
  customers: [],
}

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return !action.payload.customerData.length
        ? { ...state, customers: [...state.customers, action.payload.customerData] }
        : { ...state, customers: [...state.customers, ...action.payload.customerData] }

    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(customer => customer.id !== action.payload.customerData)
      }
    default: return state
  }
}

export default customerReducer