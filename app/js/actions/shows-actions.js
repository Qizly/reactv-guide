import AppConstants from '../constants/app-constants';
//import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppDispatcher from '../dispatchers/app-dispatcher';
import {getDailySchedule} from '../utils/api';

var ActionTypes = AppConstants.ActionTypes;

export default {
  getDailySchedule(date) {
    getDailySchedule();
  },

  receiveShows(shows) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_SHOWS,
      shows: shows
    });
  }
};
