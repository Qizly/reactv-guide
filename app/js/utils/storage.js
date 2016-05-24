const Storage = {
  get: function(key) {
    try {
      let favorites = JSON.parse(localStorage.getItem(key));

    } catch(e) {
      return null;
    }
  },

  set: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export default Storage;
