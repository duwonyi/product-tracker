import React, { Component } from 'react'
import './App.css'
import Home from './containers/Home'
import Report from './containers/Report'
import api from './api'

function objToArr(obj) {
  const arr = []
  for (let nm in obj) {
    arr.push(obj[nm])
  }
  return arr
}

const getProduct = (o, h) => {
  if (typeof o[h.p_id] === 'undefined') {
    o[h.p_id] = {
      id: h.p_id,
      description: h.description,
    }
  }
  return o[h.p_id]
}

const getInitialState = rawHistory => {
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

class App extends Component {
  state = {
    products: {},
    history: [],
    edit: null,
  }

  componentDidMount() {
    api
      .loadHistory()
      .then(history => {
        this.setState(getInitialState(history))
      })
      .catch(err => {
        console.error(err)
      })
  }

  addHistory = historyParams => {
    const { history, products } = this.state
    const newHistory = {
      id: history.length + 1,
      product: products[historyParams.productId],
      datetime: historyParams.datetime.toDate(),
      longitude: parseFloat(historyParams.longitude),
      latitude: parseFloat(historyParams.latitude),
      elevation: parseInt(historyParams.elevation, 10),
    }
    api
      .addHistory(newHistory)
      .then(res => {
        this.setState({ history: history.concat(newHistory) })
      })
      .catch(err => {
        console.error(err)
      })
  }

  updateHistory = historyParams => {
    const { history, products } = this.state
    const updatedHistory = {
      id: historyParams.id,
      product: products[historyParams.productId],
      datetime: historyParams.datetime.toDate(),
      longitude: parseFloat(historyParams.longitude),
      latitude: parseFloat(historyParams.latitude),
      elevation: parseInt(historyParams.elevation, 10),
    }
    api
      .updateHistory(updatedHistory)
      .then(res => {
        this.setState({
          history: history.map(
            h => (h.id !== updatedHistory.id ? h : updatedHistory),
          ),
          edit: null,
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  editHistory = historyId => {
    const { history } = this.state
    this.setState({ edit: history.find(h => h.id === historyId) })
  }

  deleteHistory = historyId => {
    const { history } = this.state
    api
      .deleteHistory(historyId)
      .then(res => {
        this.setState({ history: history.filter(h => h.id !== historyId) })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { history, products, edit } = this.state
    return (
      <div>
        <Home
          history={history}
          edit={edit}
          products={objToArr(products)}
          addHistory={this.addHistory}
          updateHistory={this.updateHistory}
          editHistory={this.editHistory}
          deleteHistory={this.deleteHistory}
        />
        <Report history={history} products={objToArr(products)} />
      </div>
    )
  }
}

export default App
