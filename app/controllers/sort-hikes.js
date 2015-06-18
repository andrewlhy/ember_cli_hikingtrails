import Ember from "ember";

var HikeSortController = {
  sortProperties: ['title:asc'],
  sortedHikes: Ember.computed.sort('model', 'sortProperties'),
  actions: {
    sortRating: function() {
      this.set('sortProperties', ['rating:desc']);
    }
  }
};

export default Ember.Controller.extend(HikeSortController);