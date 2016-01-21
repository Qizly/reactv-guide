import axios from 'axios';

const baseUrl = 'http://api.tvmaze.com';

function getData(path, params = {}) {
  return axios.get(baseUrl + path, params);
}

function transformShowData(show) {
  return {
    name: show.show.name,
    type: show.show.type,
    airstamp: new Date(show.airstamp),
    image: show.show.image ? show.show.image.medium : null,
    schedule: show.show.schedule,
    network: show.show.network.name,
    summary: show.show.summary.replace(/<\/?[^>]+(>|$)/g, ""),
    id: show.id
  }
}

export function getAllShows() {
  return getData('/schedule')
    .then(response => response.data.map(transformShowData));
}