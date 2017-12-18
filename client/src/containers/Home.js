import React from 'react'
import LocationHistory from '../components/LocationHistory'
import LocationInput from '../components/LocationInput'

export default ({
  history,
  edit,
  products,
  addHistory,
  updateHistory,
  editHistory,
  deleteHistory,
}) => (
  <div>
    <h1>Home</h1>
    <LocationHistory
      history={history}
      onEditHistory={editHistory}
      onDeleteHistory={deleteHistory}
    />
    <LocationInput
      products={products}
      onAddNewHistory={addHistory}
      onUpdateHistory={updateHistory}
      edit={edit}
    />
  </div>
)
