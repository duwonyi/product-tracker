import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NoMatch from './components/NoMatch'
import Home from './containers/Home'
import Report from './containers/Report'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/report' component={Report} /> 
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
