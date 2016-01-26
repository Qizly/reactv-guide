import AppConstants from '../constants/app-constants';
import AppDispatcher from '../dispatchers/app-dispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

let _shows = [];

const ShowStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    //console.log('emitting change...');
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    //console.log('added...');
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getShows() {
    return _shows;
  }
});

ShowStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.RECEIVE_SHOWS:
      _shows = action.shows;
      ShowStore.emitChange();
  }
});

export default ShowStore;
