import axios from 'axios';

export default class Api {
  constructor(query) {
    this.query = query;
    this.key = 'AIzaSyAFlyQmxsFmIm1Ut3ku_xrAMLPB8CJVS6k';
  }

  getQuery() {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.query}+subject:&maxResults=10&printType=books&key=${this.key}`
    );
  }
}

export async function fetchData(query) {
  try {
    let api = new Api(query);
    return await api.getQuery();
  } catch (error) {
    alert(`C'è stato un errore, prova a ricaricare la pagina`);
  }
}
