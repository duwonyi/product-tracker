import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHistory } from '../actions/history'
import ReportTable from '../components/ReportTable'

class Report extends Component {
  componentDidMount() {
    const { dispatch, fetchHistory } = this.props
    dispatch(fetchHistory())
  }

  render() {
    const {
      history,
      products,
    } = this.props
    return (
      <div className='container'>
        <h1 className='mt-2'>Report</h1>
        <ReportTable history={history} products={products} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  history: state.history.history,
  products: state.history.products,
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchHistory,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Report)