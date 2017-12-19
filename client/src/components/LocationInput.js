import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ProductSelect from './ProductSelect'
import { Form, FormGroup, Label, Input } from 'reactstrap'

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
      <div className='container'>
        <h2>Add Location</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for='selectProduct'>Product</Label>
            <ProductSelect
              id='selectProduct'
              productId={this.state.productId}
              products={products}
              defaultOptionName={'Which product to track?'}
              onChange={this.onProductChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='datetimePicker'>DateTime</Label>
            <DatePicker
              id='dateTimePicker'
              onChange={this.handleDateChange}
              selected={datetime}
            />
          </FormGroup>
          <FormGroup>
            <Label for='fieldLongitude'>Longitude</Label>
            <Input
              id='fieldLongitude'
              type="text"
              name="longitude"
              onChange={this.handleInputChange}
              value={longitude}
            />
          </FormGroup>
          <FormGroup>
            <Label for='fieldLatitude'>Latitude</Label>
            <Input
              id="fieldLatitude"
              type="text"
              name="latitude"
              onChange={this.handleInputChange}
              value={latitude}
            />
          </FormGroup>
          <FormGroup>
            <Label for='fieldElevation'>Elevation</Label>
            <Input
              type="text"
              name="elevation"
              onChange={this.handleInputChange}
              value={elevation}
            />
          </FormGroup>
          <input
            className='btn btn-secondary'
            type='submit'
            value={buttonLabel + ' History'}
          />
        </Form>
      </div>
    )
  }
}

export default LocationInput
