import React from 'react'

export default ({historyId, onEdit, onDelete}) => (
  <div>
    <button onClick={e => onEdit(historyId)}>Edit</button>
    <button onClick={e => onDelete(historyId)}>Remove</button>
  </div>
)