const onResponce = (res) => res.ok ? res.json : Promise.reject(`Ошибка: ${res.status}`);

const config = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac'
  }
}

class Api {
  constructor({baseUrl, headers}){
    this._headers = headers;
    this._baseUrl = baseUrl;
  }
   
  getPostsAll() {
    return fetch(`${this._baseUrl}/posts`, {
      headers: this._headers
    }) .then(res => res.json())

  }

}



const api = new Api(config);

export default api
