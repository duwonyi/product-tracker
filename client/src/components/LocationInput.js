import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ProductSelect from './ProductSelect'

import 'react-datepicker/dist/react-datepicker.css'

class LocationInput extends Component {
  state = {
    id: null,
    productId: null,
    datetime: null,
    longitude: '',
    latitude: '',
    elevation: '',
  }

  componentWillReceiveProps(update) {
    const { edit } = update
    if (edit !== null) {
      this.setState({
        id: edit.id,
        productId: edit.product.id,
        datetime: moment(edit.datetime),
        longitude: edit.longitude,
        latitude: edit.latitude,
        elevation: edit.elevation,
      })
    }
  }

  handleSubmit = evt => {
    const {
      id,
      productId,
      datetime,
      longitude,
      latitude,
      elevation,
    } = this.state
    const historyParams = {
      id,
      productId,
      datetime,
      longitude,
      latitude,
      elevation,
    }
    evt.preventDefault()
    if (this.props.edit) {
      this.props.onUpdateHistory(historyParams)
    } else {
      this.props.onAddNewHistory(historyParams)
    }
    this.setState({
      id: null,
      productId: null,
      datetime: null,
      longitude: '',
      latitude: '',
      elevation: '',
    })
  }

  handleDateChange = date => {
    this.setState({ datetime: date })
  }

  handleInputChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onProductChange = productId => {
    this.setState({ productId })
  }

  render() {
    const { products, edit } = this.props
    const { datetime, longitude, latitude, elevation } = this.state
    const buttonLabel = edit ? 'Update': 'Add'
    return (
      <div>
        <h2>Add Location</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            Product:&nbsp;
            <ProductSelect
              productId={this.state.productId}
              products={products}
              defaultOptionName={'Which product to track?'}
              onChange={this.onProductChange}
            />
          </div>
          <div>
            DateTime:&nbsp;
            <DatePicker
              onChange={this.handleDateChange}
              selected={datetime}
            />
          </div>
          <div>
            Longitude:&nbsp;
            <input
              type="text"
              name="longitude"
              onChange={this.handleInputChange}
              value={longitude}
            />
          </div>
          <div>
            Latitude:&nbsp;
            <input
              type="text"
              name="latitude"
              onChange={this.handleInputChange}
              value={latitude}
            />
          </div>
          <div>
            Elevation:&nbsp;
            <input
              type="text"
              name="elevation"
              onChange={this.handleInputChange}
              value={elevation}
            />
          </div>
          <input type='submit' value={buttonLabel + ' History'}/>
        </form>
      </div>
    )
  }
}

export default LocationInput
