import AppConstants from '../constants/app-constants';
//import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppDispatcher from '../dispatchers/app-dispatcher';

var ActionTypes = AppConstants.ActionTypes;

export default {
  receiveShows(shows) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_SHOWS,
      shows: shows
    });
  }
};



//export default {
//  receiveShows(shows) {
//    //console.log(shows);
//    dispatch({
//      actionType: AppConstants.RECEIVE_SHOWS, shows
//    });
//  },
//
//  getSchedule(date) {
//    dispatch({
//      actionType: AppConstants.GET_SCHEDULE, date
//    });
//  }
//}
