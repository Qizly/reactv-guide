import axios from 'axios';
import AppActionCreators from '../actions/shows-actions';

const baseUrl = 'http://api.tvmaze.com';

function getData(path, params = {}) {
  return axios.get(baseUrl + path, params);
}

function converToAmPm(time) {
  let timeArr = time.split(':');
  let hour = parseInt(timeArr[0]);
  let mins = timeArr[1];

  if (hour > 12) {
    return (hour % 12) + ':' + mins + 'pm'
  } else if (hour === 12) {
    return '12:' + mins + 'pm';
  } else {
    return hour + ':' + mins + 'am';
  }
}

function transformShowData(show) {
  return {
    name: show.show.name,
    type: show.show.type,
    airtime: converToAmPm(show.airtime),
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