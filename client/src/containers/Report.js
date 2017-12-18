import React from 'react'
import ReportTable from '../components/ReportTable'

export default ({history, products}) => (
  <div>
    <h1>Report</h1>
    <ReportTable history={history} products={products} />
  </div>
)
