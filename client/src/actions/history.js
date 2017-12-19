import api from '../api'
import * as types from '../constants/ActionTypes'

const requestHistory = () => ({
  type: types.HISTORY_REQUEST,
})

const receiveHistory = history => ({
  type: types.HISTORY_SUCCESS,
  history,
})

const fetchHistoryFailure = error => ({
  type: types.HISTORY_FAILURE,
  error,
})

function getProduct(o, h) {
  if (typeof o[h.p_id] === 'undefined') {
    o[h.p_id] = {
      id: h.p_id,
      description: h.description,
    }
  }
  return o[h.p_id]
}

function getInitialState(rawHistory) {
  const products = {}
  const history = rawHistory.map(h => {
    return {
      id: h.l_id,
      product: getProduct(products, h),
      datetime: h.datetime,
      longitude: h.longitude,
      latitude: h.latitude,
      elevation: h.elevation,
    }
  })
  return {
    products,
    history,
  }
}

export const fetchHistory = () => (dispatch, getState) => {
  if (!getState().history.isFetched) {
    dispatch(requestHistory())
    api.loadHistory()
      .then(history => {
        history = getInitialState(history)
        dispatch(receiveHistory(history))
      })
      .catch(err => {
        dispatch(fetchHistoryFailure(err))
      })
  }
}

const addHistoryRequest = () => ({
  type: types.ADD_HISTORY_REQUEST,
})

const addHistorySuccess = history => ({
  type: types.ADD_HISTORY_SUCCESS,
  history,
})

const addHistoryFailure = error => ({
  type: types.ADD_HISTORY_FAILURE,
  error,
})

export const addHistory = historyParams => (dispatch, getState) => {
  dispatch(addHistoryRequest())
  const { history, products } = getState().history
  const newHistory = {
    id: history[history.length - 1].id + 1,
    product: products[historyParams.productId],
    datetime: historyParams.datetime.toDate(),
    longitude: parseFloat(historyParams.longitude),
    latitude: parseFloat(historyParams.latitude),
    elevation: parseInt(historyParams.elevation, 10),
  }
  api.addHistory(newHistory)
    .then(res => {
      dispatch(addHistorySuccess(newHistory))
    })
    .catch((err) => {
      dispatch(addHistoryFailure(err))
    })
}

const updateHistoryRequest = () => ({
  type: types.UPDATE_HISTORY_REQUEST,
})

const updateHistorySuccess = updatedHistory => ({
  type: types.UPDATE_HISTORY_SUCCESS,
  updatedHistory,
})

const updateHistoryFailure = error => ({
  type: types.UPDATE_HISTORY_FAILURE,
  error,
})

export const updateHistory = historyParams => (dispatch, getState) => {
  dispatch(updateHistoryRequest())
  const { products } = getState().history
  const updatedHistory = {
    id: historyParams.id,
    product: products[historyParams.productId],
    datetime: historyParams.datetime.toDate(),
    longitude: parseFloat(historyParams.longitude),
    latitude: parseFloat(historyParams.latitude),
    elevation: parseInt(historyParams.elevation, 10),
  }
  api.updateHistory(updatedHistory)
    .then(res => {
      dispatch(updateHistorySuccess(updatedHistory))
    })
    .catch((err) => {
      dispatch(updateHistoryFailure(err))
    })
}

const deleteHistoryRequest = () => ({
  type: types.DELETE_HISTORY_REQUEST,
})

const deleteHistorySuccess = historyId => ({
  type: types.DELETE_HISTORY_SUCCESS,
  historyId,
})

const deleteHistoryFailure = error => ({
  type: types.DELETE_HISTORY_FAILURE,
  error,
})

export const deleteHistory = historyId => dispatch => {
  dispatch(deleteHistoryRequest())
  api.deleteHistory(historyId)
    .then(res => {
      dispatch(deleteHistorySuccess(historyId))
    })
    .catch((err) => {
      dispatch(deleteHistoryFailure(err))
    })
}

export const editHistory = historyId => ({
  type: types.EDIT_HISTORY,
  historyId,
})