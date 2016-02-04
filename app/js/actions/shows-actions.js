import AppConstants from '../constants/shows-constants';
import AppDispatcher from '../dispatchers/shows-dispatcher';
import {getDailySchedule} from '../utils/api';

var ActionTypes = AppConstants.ActionTypes;

export default {
  getDailySchedule(date) {
    getDailySchedule();
  },

  receiveShows(shows) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_SHOWS,
      shows
    });
  }
};

