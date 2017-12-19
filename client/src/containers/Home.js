import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addHistory,
  updateHistory,
  deleteHistory,
  editHistory,
  fetchHistory,
} from '../actions/history'
import LocationHistory from '../components/LocationHistory'
import LocationInput from '../components/LocationInput'

class Home extends Component {
  componentDidMount() {
    const { dispatch, fetchHistory } = this.props
    dispatch(fetchHistory())
  }

  render() {
    const {
      history,
      products,
      edit,
      addHistory,
      editHistory,
      deleteHistory,
      updateHistory,
    } = this.props
    return (
      <div className='container'>
        <h1 className='mt-2'>Home</h1>
        <LocationHistory
          history={history}
          onEditHistory={editHistory}
          onDeleteHistory={deleteHistory}
        />
        <LocationInput
          products={products}
          onAddNewHistory={addHistory}
          onUpdateHistory={updateHistory}
          edit={edit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  history: state.history.history,
  products: state.history.products,
  edit: state.history.edit,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  addHistory: history => {
    dispatch(addHistory(history))
  },
  updateHistory: history => {
    dispatch(updateHistory(history))
  },
  deleteHistory: historyId => {
    dispatch(deleteHistory(historyId))
  },
  editHistory: historyId => {
    dispatch(editHistory(historyId))
  },
  fetchHistory,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)