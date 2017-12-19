import React, { Component } from 'react'
import { Input } from 'reactstrap'

function objToArr(obj) {
  const arr = []
  for (let nm in obj) {
    arr.push(obj[nm])
  }
  return arr
}
class ProductSelect extends Component {
  state = {
    productId: this.props.productId,
  }

  handleSelectProduct = evt => {
    const productId = parseInt(evt.target.value, 10)
    this.setState({ productId })
    this.props.onChange(productId)
  }

  componentWillReceiveProps(update) {
    this.setState({ productId: update.productId })
  }

  render() {
    const products = objToArr(this.props.products) || []
    const defaultName = this.props.defaultOptionName || 'Select Product.'
    return (
      <div>
        <Input
          type='select'
          name='select'
          onChange={this.handleSelectProduct}
          value={this.state.productId || ''}
        >
          <option value="">{defaultName}</option>
          {products.map(p => (
            <option value={p.id} key={p.id}>
              {p.description}
            </option>
          ))}
        </Input>
      </div>
    )
  }
}

export default ProductSelect
