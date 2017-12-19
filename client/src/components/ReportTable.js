import React, { Component } from 'react'
import ProductSelect from './ProductSelect'
import { Table } from 'reactstrap'

class ReportTable extends Component {
  state = {
    productId: null,
  }

  onProductChange = productId => {
    this.setState({ productId })
  }

  getProductDescription = () => {
    return this.props.products[this.state.productId].description
  }

  renderReportTable = () => {
    const selectedProductId = this.state.productId
    if (!selectedProductId) {
      return ''
    }
    const history = this.props.history.filter(
      h => h.product.id === selectedProductId,
    )
    return (
      <div className='container'>
        <h3 className='mt-4'>{this.getProductDescription()}</h3>
        <Table>
          <thead>
            <tr>
              <th>Seq.</th>
              <th>DateTime</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Elevation</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h, i) => (
              <tr key={h.id}>
                <td>{i + 1}</td>
                <td>{h.datetime.toLocaleString()}</td>
                <td>{h.longitude}</td>
                <td>{h.latitude}</td>
                <td>{h.elevation}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }

  render() {
    const { products } = this.props
    return (
      <div className='container'>
        <h2 className='mt-4'>Product report</h2>
        <div>
          Product
          <ProductSelect
            productId={this.state.productId}
            products={products}
            defaultOptionName={'Which product to report?'}
            onChange={this.onProductChange}
          />
        </div>
        {this.renderReportTable()}
      </div>
    )
  }
}

export default ReportTable
