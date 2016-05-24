import AppConstants from '../constants/shows-constants';
import AppDispatcher from '../dispatchers/shows-dispatcher';
//import {getDailySchedule} from '../utils/api';

var ActionTypes = AppConstants.ActionTypes;

export default {
  receiveFavorites(favorites) {
    AppDispatcher.dispatch({

    })
  },

  receiveShows(shows) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_SHOWS,
      shows
    });
  },

  favoriteAShow(showId) {
    AppDispatcher.dispatch({
      type: ActionTypes.FAVORITE_A_SHOW,
      showId
    });
  }
};

