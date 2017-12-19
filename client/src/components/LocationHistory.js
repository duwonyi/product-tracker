import React from 'react'
import ActionButtons from './ActionButtons'
import DownloadLink from 'react-download-link'
import { Table } from 'reactstrap'

const exportData = history => {
  const header = [`Product Id\tDescription\tDateTime\tLongitude\tLatitude\tElevation`]
  return header.concat(history
    .map(h => {
      return (
        h.product.id +
        '\t' +
        h.product.description +
        '\t' +
        h.datetime.toLocaleString() +
        '\t' +
        h.longitude +
        '\t' +
        h.latitude +
        '\t' +
        h.elevation
      )
    }))
    .join('\n')
}

export default ({ history, onEditHistory, onDeleteHistory }) => (
  <div className='container'>
    <h2 className='mt-4'>Location History</h2>
    <Table>
      <thead>
        <tr>
          <th>Product Id</th>
          <th>Description</th>
          <th>DateTime</th>
          <th>Longitude</th>
          <th>Latitude</th>
          <th>Elevation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {history.map(h => (
          <tr key={h.id}>
            <td>{h.product.id}</td>
            <td>{h.product.description}</td>
            <td>{h.datetime.toLocaleString()}</td>
            <td>{h.longitude}</td>
            <td>{h.latitude}</td>
            <td>{h.elevation}</td>
            <td>
              <ActionButtons
                historyId={h.id}
                onEdit={onEditHistory}
                onDelete={onDeleteHistory}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <DownloadLink
      className='btn btn-primary'
      filename='export.txt'
      label='Export Data'
      exportFile={() => exportData(history)}
    />
  </div>
)
