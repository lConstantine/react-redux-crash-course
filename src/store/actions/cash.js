import { ADD_CASH, GET_CASH } from './actionTypes'

export const addCashAction = amount => ({
  type: ADD_CASH,
  payload: {
    amount
  },
})

export const getCashAction = amount => ({
  type: GET_CASH,
  payload: {
    amount
  },
})
