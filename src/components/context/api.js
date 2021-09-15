import axios from 'axios';

export default class Api {
  constructor(query, field) {
    this.query = query;
    this.field = field;
    this.key = 'AIzaSyAFlyQmxsFmIm1Ut3ku_xrAMLPB8CJVS6k';
  }

  getQuery(query, field) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}+${field}:&maxResults=10&printType=books&key=${this.key}`
    );
  }
}

export async function fetchData(query, field) {
  try {
    let api = new Api(query, field);
    return await api.getQuery(query, field);
  } catch (error) {
    alert(`C'è stato un errore, prova a ricaricare la pagina`);
  }
}
