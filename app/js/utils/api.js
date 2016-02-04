import axios from 'axios';
import AppActionCreators from '../actions/shows-actions';

const baseUrl = 'http://api.tvmaze.com';

function getData(path, params = {}) {
  return axios.get(baseUrl + path, params);
}

function addAmPm(time) {
  // convert 13:30 to 1:30am

}

function transformShowData(show) {
  //debugger;
  console.log(show);

  return {
    name: show.show.name,
    type: show.show.type,
    airtime: show.airtime,
    image: show.show.image ? show.show.image.medium : null,
    schedule: show.show.schedule,
    network: show.show.network.name,
    summary: show.show.summary.replace(/<\/?[^>]+(>|$)/g, ""),
    id: show.id,
    runtime: show.show.runtime,
    showId: show.show.id,
    schedule: show.show.schedule
  }
}

export function getDailySchedule() {
  return getData('/schedule')
    .then(response => response.data.map(transformShowData))
    .then(shows => AppActionCreators.receiveShows(shows))
    .catch(error => console.log(error));
}