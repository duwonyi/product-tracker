const baseUrl = `http://localhost:3001/`

const api = {
  loadHistory() {
    return get('locations')
  },

  addHistory(history) {
    return post('locations', history)
  },

  updateHistory(history) {
    return put(`locations/${history.id}`, history)
  },
  
  deleteHistory(id) {
    return _delete(`locations/${id}`)
  }
}

function get(url) {
  return fetch(baseUrl + url, { accept: 'application/json', })
    .then(onSuccess, onError)
}

function put(url, data) {
  const request = new Request(baseUrl + url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  })
  return fetch(request)
    .then(onSuccess, onError)
}

function post(url, data) {
  const request = new Request(baseUrl + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  })
  return fetch(request)
    .then(onSuccess, onError)
}

function _delete(url) {
  return fetch(baseUrl + url, { method: 'delete' })
    .then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
    .then(convertStringToDate)
}

function onError(error) {
  console.log(error)
}

function convertStringToDate(json) {
  if (Array.isArray(json)) {
    return json.map(v => {
      v['datetime'] = new Date(v['datetime'])
      return v
    })
  } else {
    return json
  }
}

export default api