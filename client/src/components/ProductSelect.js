import React, { Component } from 'react'

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
    const products = this.props.products || []
    const defaultName = this.props.defaultOptionName || 'Select Product.'
    return (
      <div>
        <select
          onChange={this.handleSelectProduct}
          value={this.state.productId || ''}
        >
          <option value="">{defaultName}</option>
          {products.map(p => (
            <option value={p.id} key={p.id}>
              {p.description}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default ProductSelect
