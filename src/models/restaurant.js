const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class RestaurantModel {
  static create(data) {
    return fetch(`${REACT_APP_API_URL}/restaurant/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static async update(data) {
    await fetch(`${REACT_APP_API_URL}/restaurant/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
  static delete(id) {
    return fetch(`${REACT_APP_API_URL}/restaurant/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
  static show(id) {
    return fetch(`${REACT_APP_API_URL}/restaurant/${id}`)
        .then(res => res.json())
  }
  static index() {
    return fetch(`${REACT_APP_API_URL}/restaurant/`)
        .then(res => res.json())
  }
}

