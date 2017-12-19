import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const common = (state = {
  isLoading: false
}, action) => {
  switch (action.type) {
    case types.HISTORY_REQUEST:
    case types.ADD_HISTORY_REQUEST:
    case types.DELETE_HISTORY_REQUEST:
    case types.UPDATE_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.HISTORY_SUCCESS:
    case types.ADD_HISTORY_SUCCESS:
    case types.DELETE_HISTORY_SUCCESS:
    case types.UPDATE_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    default:
    return state
  }
}

const history = (state = {
  history: [],
  products: {},
  edit: null,
  isFetched: false,
}, action) => {
  switch (action.type) {
    case types.HISTORY_SUCCESS:
      return {
        ...state,
        history: action.history.history,
        products: action.history.products,
        isFetched: true,
      }
    case types.ADD_HISTORY_SUCCESS:
      return {
        ...state,
        history: state.history.concat(action.history),
      }
    case types.DELETE_HISTORY_SUCCESS:
      return {
        ...state,
        history: state.history.filter(h => h.id !== action.historyId)
      }
    case types.UPDATE_HISTORY_SUCCESS:
      return {
        ...state,
        history: state.history.map(
          h => (h.id !== action.updatedHistory.id ? h : action.updatedHistory),
        ),
        edit: null,
      }
    case types.EDIT_HISTORY:
      return {
        ...state,
        edit: state.history.find(h => h.id === action.historyId)
      }
    default:
    return state
  }
}

const rootReducer = combineReducers({
  common,
  history,
})

export default rootReducer