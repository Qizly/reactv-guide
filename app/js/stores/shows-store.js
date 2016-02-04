import AppConstants from '../constants/shows-constants';
import AppDispatcher from '../dispatchers/shows-dispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

let _shows = [];
let show = null;

const ShowStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getShows() {
    return _shows;
  },

  getShowInfo(showId) {
    return _shows.find(show => show.showId == showId);
  }
});

ShowStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.RECEIVE_SHOWS:
      _shows = action.shows;
      ShowStore.emitChange();
      break;
  }
});

export default ShowStore;
