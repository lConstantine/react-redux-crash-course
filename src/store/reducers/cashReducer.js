import { ADD_CASH, GET_CASH } from '../actions/actionTypes'

const defaultState = {
  cash: 1000,
}

const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload }
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload }
    default: return state
  }
}

export default cashReducer